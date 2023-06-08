import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar fixed="top" expand="lg" bg="purple-60" variant='dark'>
      <Container>
        <Navbar.Brand href='/'> Finance-Admin </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;