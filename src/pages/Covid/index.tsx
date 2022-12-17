import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FiArrowUpCircle, FiPlusCircle, FiArrowDownCircle, FiBarChart2 } from 'react-icons/fi';

import RegionsMap, { MapType, regionOptions, RegionsData } from '../../components/RegionsMap';
import NavBar from '../../components/NavBar';
import ToggleGroup from '../../components/ToggleGroup';
import FilterPopover, { FiltersType } from '../../components/FilterPopover';
import SelectSingle, { Option } from '../../components/SelectSingle';
import Loader from '../../components/Loader';

import Select, { MultiValue } from 'react-select';

import { Container, Content, Map, Cards, Card, Chart, FiltersContainer } from './styles';
import api from '../../services/api';

import neighborhoodsData from '../../utils/Limite_de_Bairros.json';

const mapTypeToUrl = {
    neighborhood: 'bairro',
    ra: 'regiaoadministrativa',
    rp: 'regiaoplanejamento',
};

const dataCategory = [
    { label: 'Óbitos', value: 'mortos' },
    { label: 'Casos', value: 'casos' },
    { label: 'Recuperados', value: 'recuperados' },
    { label: 'Ativos', value: 'ativos' },
];

const timelineEvolution = {
    casos: 0,
    mortos: 1,
    recuperados: 2,
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

interface QuantityData {
    quantidade: number;
    nome: string;   
}

interface TimelineData {
    quantidade: number;
    data: string; 
}

export default function Covid() {
    const [filters, setFilters] = useState<FiltersType | null>(null);
    const [timelineFilters, setTimelineFilters] = useState<FiltersType | null>(null);

    const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<MultiValue<{
        label: string;
        value: string;
    }>>([{ label: 'Todos', value: 'Todos' }]);

    const [category, setCategory] = useState<Option>({ label: '', value: '' });
    const [timelineCategory, setTimelineCategory] = useState<Option>({ label: '', value: '' });

    const [chart, setChart] = useState<string>('BarChart');
    const [mapType, setMapType] = useState<MapType>('neighborhood');

    const [cardsData, setCardsData] = useState<CardsData>();

    const [quantityData, setQuantityData] = useState<QuantityData[]>([]);
    const [timelineData, setTimelineData] = useState<TimelineData[]>([]);

    const [loader, setLoader] = useState(true);
    const [timelineLoader, setTimelineLoader] = useState(false);

    const [neighborhoodsList, setNeighborhoodsList] = useState<{ nome: string; codbairro: string; }[]>([]);

    useEffect(() => {
        setNeighborhoodsList(neighborhoodsData.features.map(({ properties }) => ({ nome: properties.nome, codbairro: properties.codbairro })));
    }, []);
    
    useEffect(() => {
        setCategory(dataCategory[0]);
        setTimelineCategory(dataCategory[0]);
    }, [dataCategory]);

    useEffect(() => {
        async function getData() {
            setTimelineLoader(true);

            await getTimelineData();
            
            setTimelineLoader(false);
        }

        if(timelineCategory && timelineCategory.label != '' && timelineFilters)
            getData();
    }, [timelineCategory, timelineFilters]);

    useEffect(() => {
        async function getData() {
            setLoader(true);

            await getCardsData();
            await getMainData();
            await getTimelineData();
            
            setLoader(false);
        }

        if(category && category.label != '' && timelineCategory && timelineCategory.label != '')
            getData();
    }, [mapType, category]);

    async function getCardsData() {
        let response;
        
        if(category.value == 'casos')
            response = await api.get(`quantidade/covid/${mapTypeToUrl[mapType]}/metrica`);
        else
            response = await api.get(`quantidade/covid/${category.value}/${mapTypeToUrl[mapType]}/metrica`);

        setCardsData(response.data);
    }

    async function getMainData() {
        let response;
        
        if(category.value == 'casos')
            response = await api.get(`quantidade/covid/${mapTypeToUrl[mapType]}`);
        else
            response = await api.get(`quantidade/covid/${category.value}/${mapTypeToUrl[mapType]}`);

        setQuantityData(response.data);
        
        const { min, max } = getMinMax(response.data);
        setFilters({ max, min });
    }

    async function getTimelineData() {
        const begin = formatDate(timelineFilters?.begin);
        const end = formatDate(timelineFilters?.end);

        const data = {
            inicio: begin ? begin : '01-01-20',
            fim: end ? end : '31-12-20',
            evolucao: timelineEvolution[timelineCategory.value]
        };

        const response = await api.get('quantidade/covid/timeline/filtro', {
            params: data
        });

        setTimelineData(response.data);
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

    function formatDate(date: string) {
        if(!date)
            return null;
        
        const [year, month, day] = date.split('-');

        return `${day}-${month}-${year.slice(2, 4)}`;
    }

    const regionData = useMemo(() => {
        return quantityData.map(({ quantidade, nome }) => ({ value: quantidade, nome }));
    }, [mapType, category, quantityData]);

    const filteredData = useMemo(() => {
        let currentData = quantityData;

        if(mapType == 'neighborhood') {
            currentData = selectedNeighborhoods.some(selected => selected.value === 'Todos') || selectedNeighborhoods.length == 0 ?
                currentData :
                currentData?.filter(({ nome }) => selectedNeighborhoods.some(selected => selected.label === nome));
        }

        const chartData = currentData?.map(({ quantidade, nome }) => ({ nome, value: quantidade }));

        return chartData?.filter(data => {
            if(filters && filters.max !== undefined && filters.min !== undefined) {
                return data.value >= filters.min && data.value <= filters.max;
            } else
                return currentData;
        });
    }, [filters, mapType, category, selectedNeighborhoods, quantityData]);

    return (
        <Container>
            <NavBar />
            <Content>
                {loader || !regionData || regionData.length == 0 ? <Loader /> : (
                    <>
                        <h1>Quantidade de {category.value.toLowerCase()}</h1>
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
                        <Chart>
                            <FiltersContainer>
                                <SelectSingle value={timelineCategory as Option} setValue={setTimelineCategory} options={dataCategory.slice(0, dataCategory.length - 1)} />
                                <FilterPopover setFilters={setTimelineFilters as Dispatch<SetStateAction<FiltersType>>} filters={timelineFilters} page="DATE" />
                            </FiltersContainer>
                            {timelineLoader ? <Loader /> : (
                                <ResponsiveContainer>
                                    <LineChart
                                        data={timelineData.map(
                                            ({ quantidade, data }) => ({ data: data.replaceAll('-', '/'), [timelineCategory.label]: quantidade })
                                        )}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="data" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dot={false} dataKey={timelineCategory.label} stroke="#24222F" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            )}   
                        </Chart>
                    </>
                )}
            </Content>
        </Container>
    );
}