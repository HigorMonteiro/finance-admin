import Card from 'react-bootstrap/Card';

function SimpleCard({...props }) {
  return (
    <Card bg="white">
      <Card.Body>
        <Card.Title>{props.hedline_text}</Card.Title>
        <Card.Subtitle className="mb-6" as="h3">{props.simble} R${props.money}</Card.Subtitle>
        <Card.Text>Last Transaction</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SimpleCard;