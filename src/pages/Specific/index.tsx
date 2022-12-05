import NeighborhoodsMap from '../../components/NeighborhoodsMap';
import NavBar from '../../components/NavBar';

import { FiArrowUpCircle, FiArrowDownCircle, FiBarChart2, FiPlusCircle } from 'react-icons/fi';

import { Container, Content, Map, Cards, Card } from './styles';

export default function Specific() {
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
        <Cards>
          <Card>
            <FiArrowUpCircle />
            <div>
              <strong>Máximo</strong>
              <p>Magalhães Bastos</p>
              <p>1050</p>
            </div>
          </Card>
          <Card>
            <FiArrowDownCircle />
            <div>
              <strong>Mínimo</strong>
              <p>Recreio dos Bandeirantes</p>
              <p>1050</p>
            </div>
          </Card>
          <Card>
            <FiBarChart2 />
            <div>
              <strong>Média</strong>
              <p>1050</p>
            </div>
          </Card>
          <Card>
            <FiPlusCircle />
            <div>
              <strong>Total</strong>
              <p>10000</p>
            </div>
          </Card>
        </Cards>
        <Map>
          <NeighborhoodsMap name={'Legenda'} captionItems={captionItems} />
        </Map>
      </Content>
    </Container>
  );
}