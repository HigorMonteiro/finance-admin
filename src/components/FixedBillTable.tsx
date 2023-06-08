import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function FixedBillTable({...props }) {
  return (
    <div>
      <Card bg="white">
        <Card.Body><Card.Title>{props.hedline_text}</Card.Title> 
          <Table responsive="sm" >
            <thead>
              <tr>
                <th>Venc.</th>
                <th>Conta</th>
                <th>valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08/06/2023</td>
                <td>Casa</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td>08/06/2023</td>
                <td>Internet</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td>08/06/2023</td>
                <td>Plan. Saúde</td>
                <td>R$ 240,00</td>
              </tr>
              <tr>
                <td>08/06/2023</td>
                <td>Claro</td>
                <td>R$ 50,00</td>
              </tr>
              <tr>
                <td>08/06/2023</td>
                <td>Agespisa</td>
                <td>R$ 40,00</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FixedBillTable;