import { useEffect, useMemo, useState } from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Popup, Polygon } from 'react-leaflet';

import neighborhoodsData from '../../utils/Limite_de_Bairros.json';
import rasData from '../../utils/Regioes_Administrativas.json';
import rpsData from '../../utils/Regioes_de_Planejamento.json';

import { Container, Captions, CaptionTitle, CaptionList, CaptionItem, CaptionColor, HideButton, ShowButton } from './styles';
import { FiX, FiHelpCircle } from 'react-icons/fi';

interface GeoJSON {
  features: Local[];
}

interface Local {
  geometry: Geometry;
  properties: Properties;
}

interface Properties {
  nome: string;
  codbairro?: string;
  regiao_adm?: string;
  codra?: number;
  rp?: string;
  cod_rp?: string;
}

interface Geometry {
  coordinates: LatLngTuple[];
}

interface RegionsData extends Properties {
  value: number;
}

interface RegionsMapProps {
  name: string;
  captionItems?: string[];
  captionColors: string[];
  data: RegionsData[];
  regionType: 'rp' | 'ra' | 'neighborhood';
}

export type MapType = 'ra' | 'rp' | 'neighborhood';

export const regionOptions = [
  {value: 'ra', label: 'Região Administrativa'}, 
  {value: 'neighborhood', label: 'Bairro'}, 
  {value: 'rp', label: 'Região de Planejamento'}
];

export default function RegionsMap({ name, captionItems, captionColors, data, regionType }: RegionsMapProps) {
  const neighborhoods = neighborhoodsData;
  const ras = rasData;
  const rps = rpsData;

  const center: LatLngTuple = [-22.933240, -43.449380];

  const [regions, setRegions] = useState<GeoJSON | null>(null);
  const [showCaption, setShowCaption] = useState(true);

  const captionDivision = useMemo(() => {
    type Accumulator = {
      min: number;
      max: number;
    };

    const { min, max } = data.reduce((accumulator: Accumulator | null, currentValue) => {
      const { value } = currentValue;
      
      if(accumulator != null) {
        const { min, max } = accumulator;

        return { min: value < min ? value : min, max: value > max ? value : max };
      } else
        return { min: value, max: value };
    }, null) as Accumulator;

    return { min, max, step: (max - min) / captionColors.length };
  }, [data, captionColors]);

  const captionRanges = useMemo(() => getCaptionRanges(), [captionColors, captionDivision]);

  function getColorIndex(value: number) {
    for(let i = 0; i < captionColors.length; i++) {
      const { min, max } = captionRanges[i];

      if(value >= min && value <= max)
        return i;
    }

    return 0;
  }

  function getRegionValue(properties: Properties) {
    let region;
    
    switch (regionType) {
      case 'rp':
        region = data.find(region => region.nome == properties.nome);
        break;

      case 'ra':
        region = data.find(region => region.nome.trim() == properties.nome);
        break;
    
      default:
        region = data.find(region => region.nome == properties.nome);
        break;
    }

    return region ? region.value : captionDivision.min;
  }

  function getCaptionRanges() {
    const ranges = [];

    const captionLength = captionColors.length;
    const { min, step } = captionDivision;

    for(let i = 0; i < captionColors.length; i++) {
      ranges.push({ 
        min: Math.round(
          i == captionLength - 1 ? min
            : Math.round(min + (captionLength - i - 1) * (step)) + 1
        ),
        max: Math.round(min + (captionLength - i) * (step))
      });
    }

    return ranges;
  }

  useEffect(() => {
    switch (regionType) {
      case 'ra':
        setRegions(ras as unknown as GeoJSON);
        break;
      case 'rp':
        setRegions(rps as unknown as GeoJSON);
        break;
      case 'neighborhood':
        setRegions(neighborhoods as unknown as GeoJSON);
        break;
    }

    // const RP: (string | null)[] = [];
    // const RPV = [];

    // if(neighborhoodsData != null) {
    //   for(const neighborhood of (neighborhoodsData as unknown as GeoJSON).features) {
    //     if(!RP.some(regiao_adm => regiao_adm == neighborhood.properties.regiao_adm))
    //       RP.push(neighborhood.properties?.regiao_adm);
    //   }

    //   for(const regiao_adm of RP) {
    //     RPV.push({
    //       regiao_adm,
    //       value: Math.floor(Math.random() * 1000) + 1
    //     });
    //   }
    // }

    // console.warn(RPV);
  }, [regionType]);

  return (
    <Container style={{ height: '4.4rem' }}>
      <MapContainer center={center} zoom={11} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {regions && regions.features.map(({ geometry, properties }, index) => (
          <Polygon pathOptions={{fillColor: captionColors[getColorIndex(getRegionValue(properties))], 
            fillOpacity: 0.55, color: '#272727', weight: 0.5}} 
            key={index} positions={geometry.coordinates}
          >
            <Popup>{`${properties.nome}`} <br/> {`${getRegionValue(properties)}`}</Popup>
          </Polygon>
        ))}
      </MapContainer>
      
      {showCaption ? (
        <Captions>
          <HideButton onClick={() => setShowCaption(!showCaption)}>
            <FiX />
          </HideButton>
          <CaptionTitle>
            <strong>{name}</strong>
          </CaptionTitle>
          <CaptionList>
            {captionColors.map((color, index) => (
              <CaptionItem key={index}>
                <CaptionColor css={{ backgroundColor: color }} />
                {captionItems == null ? `${captionRanges[index].min} a ${captionRanges[index].max}` : captionItems[index]}
              </CaptionItem>
            ))}
          </CaptionList>
        </Captions>
      ) : (
        <ShowButton onClick={() => setShowCaption(!showCaption)}>
          <FiHelpCircle />
        </ShowButton>
      )}
    </Container>
  );
}