import NeighborhoodsMap from '../../components/NeighborhoodsMap';
import NavBar from '../../components/NavBar';

import { Container, Content, Maps } from './styles';

export default function General() {
  const captionItems = [
    { color: '#D83535', name: 'AAAAAAAAA' },
    { color: '#D95F36', name: 'BBBBBBBB' },
    { color: '#D97D36', name: 'CCCCCCCCC' },
    { color: '#D9A536', name: 'DDDDDDDDD' },
    { color: '#D9D336', name: 'EEEEEEEE' },
  ];

  return (
    <Container>
      <NavBar />
      <Content>
        <Maps>
          <NeighborhoodsMap name={'Legenda'} captionItems={captionItems} />
          <NeighborhoodsMap name={'Legenda'} captionItems={captionItems} />
        </Maps>
      </Content>
    </Container>
  );
}