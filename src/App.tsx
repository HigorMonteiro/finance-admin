import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SimpleCard from './components/SimpleCard';

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
          <Col sm={6}>
            <SimpleCard hedline_text="Saida" money="900" simble="-"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
