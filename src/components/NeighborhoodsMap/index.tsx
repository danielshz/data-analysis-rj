import { useEffect, useState } from 'react';
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
  NOME: string;
  CODBNUM: number;
}

interface Geometry {
  coordinates: LatLngTuple[];
}

interface CaptionData {
  color: string;
  name: string;
}

interface NeighborhoodsMapProps {
  name: string;
  captionItems: CaptionData[];
}

export default function NeighborhoodsMap({ name, captionItems }: NeighborhoodsMapProps) {
  const center: LatLngTuple = [-22.933240, -43.449380];

  const [neighborhoods, setNeighborhoods] = useState<GeoJSON | null>(null);
  const [showCaption, setShowCaption] = useState(true);

  useEffect(() => {
    setNeighborhoods(neighborhoodsData as unknown as GeoJSON);
  }, []);

  return (
    <Container style={{ height: '4.4rem' }}>
      <MapContainer center={center} zoom={11} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {neighborhoods && neighborhoods.features.map(({ geometry, properties }) => (
          <Polygon pathOptions={{fillColor: captionItems[Math.floor(Math.random() * 5)].color, fillOpacity: 0.55, color: '#272727', weight: 0.5}} 
            key={properties.CODBNUM} positions={geometry.coordinates}
          >
            <Popup>{properties.NOME}</Popup>
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
            {captionItems.map(({ color, name }) => (
              <CaptionItem key={color}>
                <CaptionColor css={{ backgroundColor: color }}  />
                {name}
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