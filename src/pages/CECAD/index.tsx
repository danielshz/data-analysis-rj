import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FiArrowUpCircle, FiArrowDownCircle, FiBarChart2, FiPlusCircle } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import Select, { MultiValue } from 'react-select';

import RegionsMap, { MapType, regionOptions, RegionsData } from '../../components/RegionsMap';
import NavBar from '../../components/NavBar';
import ToggleGroup from '../../components/ToggleGroup';
import FilterPopover, { FiltersType } from '../../components/FilterPopover';
import SelectSingle, { Option } from '../../components/SelectSingle';
import Loader from '../../components/Loader';

import { Container, Content, Map, Cards, Card, Chart, FiltersContainer } from './styles';

import api from '../../services/api';

import neighborhoodsData from '../../utils/Limite_de_Bairros.json';

const mapTypeToUrl = {
    neighborhood: 'bairro',
    ra: 'regiaoadministrativa',
    rp: 'regiaoplanejamento',
};

const pathnameToUrl = {
    '/income': 'faixa-renda',
    '/poverty': 'extrema-pobreza',
    '/bolsa_familia': 'bolsa-familia',
};

const income = [
    { label: 'Extrema Pobreza', value: 'faixa_renda_extrema_pobreza' },
    { label: 'Pobreza', value: 'faixa_renda_pobreza' },
    { label: 'Baixa Renda', value: 'faixa_renda_baixa_renda' },
    { label: 'Acima de 1/2 S.M.', value: 'faixa_renda_acima_1_5' },
];

const incomeURL = {
    'Extrema Pobreza': 'faixa-renda-extrema-pobreza',
    'Pobreza': 'pobreza',
    'Baixa Renda': 'baixa-renda',
    'Acima de 1/2 S.M.': 'acima1-5',
};

const poverty = [
    { label: 'Cadastrado', value: 'extrema_pobreza_cadastrado' },
    { label: 'Sem registro', value: 'extrema_pobreza_sem_registro' },
];

const bolsa_familia = [
    { label: 'Possui', value: 'bolsa_familia_sim' },
    { label: 'Não possui', value: 'bolsa_familia_nao' },
];

const captionColors = ['#D83535','#D95F36','#D97D36','#D9A536'];
const chartOptions = [{ label: 'BarChart', value: 'BarChart'}, { label: 'PieChart', value: 'PieChart' }];

type CategoryLabel = 'Extrema Pobreza' | 'Pobreza' | 'Baixa Renda' | 'Acima de 1/2 S.M.';

type FaixaRendaKeys = 'faixa_renda_extrema_pobreza' | 'faixa_renda_pobreza' | 'faixa_renda_baixa_renda' | 'faixa_renda_acima_1_5';
type ExtremaPobrezaKeys = 'extrema_pobreza_cadastrado' | 'extrema_pobreza_sem_registro';
type BolsaFamiliaKeys = 'bolsa_familia_sim' | 'bolsa_familia_nao';

interface CardsData {
    maximo: number;
    minimo: number;
    total: number;
    media: number;
    max_regiao: string;
    min_regiao: string;
}

interface BolsaFamilia {
    nome?: string;
    rp?: string;
    regiao_adm?: string;
    bolsa_familia_sim: number;
    bolsa_familia_nao: number;
}

interface ExtremaPobreza {
    nome?: string;
    rp?: string;
    regiao_adm?: string;
    extrema_pobreza_cadastrado: number;
    extrema_pobreza_sem_registro: number;
}

interface FaixaRenda {
    nome?: string;
    rp?: string;
    regiao_adm?: string;
    faixa_renda_extrema_pobreza: number;
    faixa_renda_pobreza: number;
    faixa_renda_baixa_renda: number;
    faixa_renda_acima_1_5: number;
}

export default function CECAD() {
    const location = useLocation();

    const [filters, setFilters] = useState<FiltersType | null>(null);

    const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<MultiValue<{
        label: string;
        value: string;
    }>>([{ label: 'Todos', value: 'Todos' }]);

    const [category, setCategory] = useState<Option>({ label: '', value: '' });
    const [chart, setChart] = useState<string>('BarChart');
    const [mapType, setMapType] = useState<MapType>('neighborhood');

    const [cardsData, setCardsData] = useState<CardsData>();

    const [incomeData, setIncomeData] = useState<FaixaRenda[]>([]);
    const [povertyData, setPovertyData] = useState<ExtremaPobreza[]>([]);
    const [bolsaFamiliaData, setBolsaFamiliaData] = useState<BolsaFamilia[]>([]);

    const [loader, setLoader] = useState(true);
    const [neighborhoodsList, setNeighborhoodsList] = useState<{ nome: string; codbairro: string; }[]>([]);

    const dataCategory = useMemo(() => {
        switch (location.pathname) {
            case '/income':
                return income;
            case '/poverty':
                return poverty;
            case '/bolsa_familia':
                return bolsa_familia;
        }

        return [{ label: '', value: '' }];
    }, [location.pathname]);

    useEffect(() => {
        setNeighborhoodsList(neighborhoodsData.features.map(({ properties }) => ({ nome: properties.nome, codbairro: properties.codbairro })));
    }, []);

    useEffect(() => {
        setCategory(dataCategory[0]);
    }, [dataCategory]);

    useEffect(() => {
        let currentData: any[] = [];

        switch (location.pathname) {
            case '/income':
                currentData = incomeData;
                break;
            case '/poverty':
                currentData = povertyData;
                break;
            case '/bolsa_familia':
                currentData = bolsaFamiliaData;
                break;
        }

        if(currentData.length > 0) {
            const hasCategory = Object.keys(currentData[0]).some(key => key == category.value);

            if(hasCategory) {
                const { min, max } = getMinMax(currentData);
                setFilters({ max, min });
            }
        }
    }, [location.pathname, cardsData, category, incomeData, povertyData, bolsaFamiliaData]);

    useEffect(() => {
        async function getData() {
            setLoader(true);

            await getCardsData();
            await getMainData();
            
            setLoader(false);
        }

        if(category && category.label != '')
            getData();
    }, [location.pathname, mapType, category]);

    async function getCardsData() {
        const pathname = location.pathname as '/income' | '/poverty' | '/bolsa_familia';
        let response;

        if(pathname == '/income' && incomeURL[category.label as CategoryLabel]) {
            response = await api.get(`quantidade/${incomeURL[category.label as CategoryLabel]}/${mapTypeToUrl[mapType]}/metrica`);
            setCardsData(response.data);
        }
        else if(pathnameToUrl[pathname] == undefined || pathnameToUrl[pathname] == 'faixa-renda')
            return null;
        else {
            response = await api.get(`quantidade/${pathnameToUrl[pathname]}/${mapTypeToUrl[mapType]}/metrica`);
            setCardsData(response.data[category.value]);
        }
    }

    async function getMainData() {
        const pathname = location.pathname as '/income' | '/poverty' | '/bolsa_familia';
        
        let response;

        if(pathname == '/income') {
            if(incomeURL[category.label as CategoryLabel] == undefined)
                return null;
                
            response = await api.get(`quantidade/${incomeURL[category.label as CategoryLabel]}/${mapTypeToUrl[mapType]}`);
        }
        else if(pathnameToUrl[pathname] == undefined || pathnameToUrl[pathname] == 'faixa-renda')
            return null;
        else
            response = await api.get(`quantidade/${pathnameToUrl[pathname]}/${mapTypeToUrl[mapType]}`);

        switch (pathname) {
            case '/income':
                setIncomeData(response.data);
                break;
            case '/poverty':
                setPovertyData(response.data);
                break;
            case '/bolsa_familia':
                setBolsaFamiliaData(response.data);
                break;
        }

        if(response.data.length > 0) {
            const hasCategory = Object.keys(response.data[0]).some(key => key == category.value);
    
            if(hasCategory) {
                const { min, max } = getMinMax(response.data);
                setFilters({ max, min });
            }
        }
    }

    function getMinMax(data: any) {
        type Accumulator = {
            min: number;
            max: number;
        };

        const { min, max } = data.reduce((accumulator: Accumulator | null, currentValue: any) => {
            if(accumulator != null) {
                const value = currentValue[category.value];
                const { min, max } = accumulator;
        
                return { min: value < min ? value : min, max: value > max ? value : max };
            } else
                return { min: currentValue[category.value], max: currentValue[category.value] };
        }, null) as Accumulator;

        return { min, max };
    }
  
    const regionData = useMemo(() => {
        if((incomeData || povertyData || bolsaFamiliaData) && category.value != '') {
            switch (location.pathname) {
                case '/income':
                    return incomeData.map(data => ({ value: data[category.value as FaixaRendaKeys], nome: data.nome }));
                case '/poverty':
                    return povertyData.map(data => ({ value: data[category.value as ExtremaPobrezaKeys], nome: data.nome }));
                case '/bolsa_familia':
                    return bolsaFamiliaData.map(data => ({ value: data[category.value as BolsaFamiliaKeys], nome: data.nome }));
            }
        }

        return null;
    }, [location.pathname, mapType, category, incomeData, povertyData, bolsaFamiliaData]);

    const filteredData = useMemo(() => {
        let currentData: any[] | BolsaFamilia[] | ExtremaPobreza[] | FaixaRenda[] | undefined;

        switch (location.pathname) {
            case '/income':
                currentData = incomeData;
                break;
            case '/poverty':
                currentData = povertyData;
                break;
            case '/bolsa_familia':
                currentData = bolsaFamiliaData;
                break;
        }

        if(mapType == 'neighborhood') {
            currentData = selectedNeighborhoods.some(selected => selected.value === 'Todos') || selectedNeighborhoods.length == 0 ?
                currentData :
                currentData?.filter(({ nome }) => selectedNeighborhoods.some(selected => selected.label === nome));
        }

        currentData = currentData?.map(data => ({ nome: data.nome, value: data[category.value]}));

        return currentData?.filter(data => {
            if(filters && filters.max !== undefined && filters.min !== undefined) {
                return data.value >= filters.min && data.value <= filters.max;
            } else
                return currentData;
        });
    }, [filters, mapType, category, selectedNeighborhoods, bolsaFamiliaData, povertyData, incomeData]);

    const pageDescription = useMemo(() => {
        switch (location.pathname) {
            case '/income':
                return `Quantidade de famílias/pessoas em ${category.label}`;
            case '/poverty':
                return `Quantidade de famílias/pessoas ${category.value == 'Sem registro' ? 'sem' : 'com'} CadUnico`;
            case '/bolsa_familia':
                return `Quantidade de famílias/pessoas ${category.value == 'Não possui' ? 'sem' : 'com'} Bolsa família`;
        }
    }, [category, location.pathname]);
    
    return (
        <Container>
            <NavBar />
            <Content>
                {loader || !regionData || regionData.length == 0 ? <Loader /> : (
                    <>
                        <h1>{pageDescription}</h1>
                        <Cards>
                            <Card>
                                <FiArrowUpCircle />
                                <div>
                                    <strong>Máximo</strong>
                                    <p>{cardsData?.max_regiao}</p>
                                    <p>{cardsData?.maximo}</p>
                                </div>
                            </Card>
                            <Card>
                                <FiArrowDownCircle />
                                <div>
                                    <strong>Mínimo</strong>
                                    <p>{cardsData?.min_regiao}</p>
                                    <p>{cardsData?.minimo}</p>
                                </div>
                            </Card>
                            <Card>
                                <FiBarChart2 />
                                <div>
                                    <strong>Média</strong>
                                    <p>{cardsData?.media}</p>
                                </div>
                            </Card>
                            <Card>
                                <FiPlusCircle />
                                <div>
                                    <strong>Total</strong>
                                    <p>{cardsData?.total}</p>
                                </div>
                            </Card>
                        </Cards>
                        <FiltersContainer>
                            <ToggleGroup setValue={setMapType as React.Dispatch<React.SetStateAction<string>>} value={mapType} options={regionOptions} />
                            <SelectSingle value={category as Option} setValue={setCategory} options={dataCategory} />
                        </FiltersContainer>
                        <Map>
                            <RegionsMap name={category.label} captionColors={captionColors} data={regionData as RegionsData[]} regionType={mapType} />
                        </Map>
                        <Chart>
                            <FiltersContainer>
                                {mapType == 'neighborhood' && (
                                    <Select className="react-select-container" classNamePrefix="react-select" isMulti 
                                        defaultValue={selectedNeighborhoods} options={[{ label: 'Todos', value: 'Todos' },
                                        ...neighborhoodsList.map(({ nome, codbairro }) => ({ label: nome, value: codbairro }))]}
                                        placeholder="Selecione os bairros" onChange={(value, actionMeta) => setSelectedNeighborhoods(value)} 
                                    />
                                )}
                                <ToggleGroup setValue={setChart as React.Dispatch<React.SetStateAction<string>>} value={chart} options={chartOptions} />
                                <FilterPopover setFilters={setFilters as Dispatch<SetStateAction<FiltersType>>} filters={filters} page="QUANT" />
                            </FiltersContainer>
                            <ResponsiveContainer>
                                {chart == 'BarChart' ? (
                                    <BarChart
                                        data={filteredData}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="nome" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="value" fill="#24222F" name={category.label} />
                                    </BarChart>
                                ) : (
                                    <PieChart>
                                        <Pie
                                            dataKey="value"
                                            isAnimationActive={false}
                                            data={filteredData}
                                            nameKey="nome"
                                            fill="#24222F"
                                            label
                                        />
                                        <Tooltip />
                                    </PieChart>
                                )}
                            </ResponsiveContainer>
                        </Chart>
                    </>
                )}
            </Content>
        </Container>
    );
}