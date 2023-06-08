import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SimpleCard from './components/SimpleCard';
import CardTable from './components/CardTable';
import FixedBillTable from './components/FixedBillTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Container className='wallet_section'>
        <Row>
          <Col sm={6} className='wallet_section__card_wallet'>
            <SimpleCard hedline_text="Entrada" money="40" simble="+"/>
          </Col>
          <Col sm={6}  className='wallet_section__card_wallet'>
            <SimpleCard hedline_text="Saida" money="900" simble="-"/>
          </Col>
        </Row>
        <Row>
          <Col md={12}  xl={8} className='wallet_section__card_wallet'>
            <CardTable hedline_text="Cartões"/>
          </Col>
          <Col md={12}  xl={4} className='wallet_section__card_wallet'>
            <FixedBillTable hedline_text="Contas Fixas"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
