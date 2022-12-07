import { useEffect, useMemo, useState } from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Popup, Polygon } from 'react-leaflet';

import neighborhoodsData from '../../utils/neighborhoods.json';

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
  codbairro: string;
  regiao_adm: string;
  codra: number;
  rp: string;
  cod_rp: string;
}

interface Geometry {
  coordinates: LatLngTuple[];
}

interface NeighborhoodsData extends Properties {
  value: number;
}

interface NeighborhoodsMapProps {
  name: string;
  captionItems?: string[];
  captionColors: string[];
  data: NeighborhoodsData[];
  regionType: 'rp' | 'ra' | 'neighborhood'
}

export default function NeighborhoodsMap({ name, captionItems, captionColors, data, regionType }: NeighborhoodsMapProps) {
  const center: LatLngTuple = [-22.933240, -43.449380];

  const [neighborhoods, setNeighborhoods] = useState<GeoJSON | null>(null);
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

  function getNeighborhoodValue(properties: Properties) {
    let neighborhood;

    switch (regionType) {
      case 'rp':
        neighborhood = data.find(neighborhood => neighborhood.rp == properties.rp);
        break;
      case 'ra':
        neighborhood = data.find(neighborhood => neighborhood.regiao_adm == properties.regiao_adm);
        break;
    
      default:
        neighborhood = data.find(neighborhood => neighborhood.nome == properties.nome);
        break;
    }

    return neighborhood ? neighborhood.value : captionDivision.min;
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
    setNeighborhoods(neighborhoodsData as unknown as GeoJSON);

    const RP: number[] = [];
    const RPV = [];

    if(neighborhoodsData != null) {
      for(const neighborhood of (neighborhoodsData as unknown as GeoJSON).features) {
        if(!RP.some(codbairro => codbairro == parseInt(neighborhood.properties.codbairro)))
          RP.push(parseInt(neighborhood.properties.codbairro));
      }

      for(const codbairro of RP) {
        RPV.push({
          codbairro,
          value: Math.floor(Math.random() * 1000) + 1
        });
      }
    }

    console.log(RPV);
  }, []);

  return (
    <Container style={{ height: '4.4rem' }}>
      <MapContainer center={center} zoom={11} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {neighborhoods && neighborhoods.features.map(({ geometry, properties }) => (
          <Polygon pathOptions={{fillColor: captionColors[getColorIndex(getNeighborhoodValue(properties))], 
            fillOpacity: 0.55, color: '#272727', weight: 0.5}} 
            key={properties.codbairro} positions={geometry.coordinates}
          >
            <Popup>{`${properties.nome}`} <br/> {`${getNeighborhoodValue(properties)}`}</Popup>
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