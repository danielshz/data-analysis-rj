import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FiArrowUpCircle, FiArrowDownCircle, FiBarChart2, FiPlusCircle } from 'react-icons/fi';
import Select, { MultiValue } from 'react-select';

import RegionsMap, { MapType, regionOptions, RegionsData } from '../../components/RegionsMap';
import NavBar from '../../components/NavBar';
import ToggleGroup from '../../components/ToggleGroup';
import FilterPopover, { FiltersType } from '../../components/FilterPopover';
import Loader from '../../components/Loader';

import { Container, Content, Map, Cards, Card, Chart, FiltersContainer } from './styles';

import api from '../../services/api';

import neighborhoodsData from '../../utils/Limite_de_Bairros.json';

const mapTypeToUrl = {
    neighborhood: 'bairro',
    ra: 'regiaoadministrativa',
    rp: 'regiaoplanejamento',
};

const captionColors = ['#D83535','#D95F36','#D97D36','#D9A536'];
const chartOptions = [{ label: 'BarChart', value: 'BarChart'}, { label: 'PieChart', value: 'PieChart' }];

interface CardsData {
    maximo: number;
    minimo: number;
    total: number;
    media: number;
    max_regiao: string;
    min_regiao: string;
}

interface UnidadeDeSaude {
    nome: string;
    quantidade: number;
}

export default function HealthUnit() {
    const [filters, setFilters] = useState<FiltersType | null>(null);

    const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<MultiValue<{
        label: string;
        value: string;
    }>>([{ label: 'Todos', value: 'Todos' }]);

    const [chart, setChart] = useState<string>('BarChart');
    const [mapType, setMapType] = useState<MapType>('neighborhood');

    const [cardsData, setCardsData] = useState<CardsData>();

    const [unitsData, setUnitsData] = useState<UnidadeDeSaude[]>([]);

    const [loader, setLoader] = useState(true);
    const [neighborhoodsList, setNeighborhoodsList] = useState<{ nome: string; codbairro: string; }[]>([]);
  
    useEffect(() => {
        setNeighborhoodsList(neighborhoodsData.features.map(({ properties }) => ({ nome: properties.nome, codbairro: properties.codbairro })));
    }, []);

    useEffect(() => {
        async function getData() {
            setLoader(true);

            await getCardsData();
            await getMainData();
            
            setLoader(false);
        }

        getData();
    }, [mapType]);

    async function getCardsData() {
        const response = await api.get(`quantidade/unidade/${mapTypeToUrl[mapType]}/metrica`);

        setCardsData(response.data);
    }

    async function getMainData() {
        const response = await api.get(`quantidade/unidade/${mapTypeToUrl[mapType]}`);

        setUnitsData(response.data);
        
        const { min, max } = getMinMax(response.data);
        setFilters({ max, min });
    }
    
    function getMinMax(data: any) {
        type Accumulator = {
            min: number;
            max: number;
        };

        const { min, max } = data.reduce((accumulator: Accumulator | null, currentValue: any) => {
            if(accumulator != null) {
                const value = currentValue.quantidade;
                const { min, max } = accumulator;
        
                return { min: value < min ? value : min, max: value > max ? value : max };
            } else
                return { min: currentValue.quantidade, max: currentValue.quantidade };
        }, null) as Accumulator;

        return { min, max };
    }

    const regionData = useMemo(() => {
        return unitsData.map(({ quantidade, nome }) => ({ value: quantidade, nome }));
    }, [mapType, unitsData]);

    const filteredData = useMemo(() => {
        let currentData = unitsData;

        if(mapType == 'neighborhood') {
            currentData = selectedNeighborhoods.some(selected => selected.value === 'Todos') || selectedNeighborhoods.length == 0 ?
                currentData :
                currentData?.filter(({ nome }) => selectedNeighborhoods.some(selected => selected.label === nome));
        }

        const chartData = currentData?.map(({ nome, quantidade }) => ({ nome, value: quantidade }));

        return chartData?.filter(({ value }) => {
            if(filters && filters.max !== undefined && filters.min !== undefined) {
                return value >= filters.min && value <= filters.max;
            } else
                return currentData;
        });
    }, [filters, mapType, selectedNeighborhoods, unitsData]);
    
    return (
        <Container>
            <NavBar />
            <Content>
                { loader || !regionData || regionData.length == 0 ? <Loader /> : (
                    <>
                        <h1>Quantidade de unidades de saúde por região</h1>
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
                        </FiltersContainer>
                        <Map>
                            <RegionsMap name="Unidades" captionColors={captionColors} data={regionData as RegionsData[]} regionType={mapType} />
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
                                        <Bar dataKey="value" fill="#24222F" name="Unidades" />
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