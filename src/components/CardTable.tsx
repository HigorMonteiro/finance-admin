import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function CardTable({...props }) {
  return (
    <div>
      <Card bg="white">
        <Card.Body><Card.Title>{props.hedline_text}</Card.Title> 
          <Table responsive="sm" >
            <thead>
              <tr>
                <th>Cartão</th>
                <th>Data</th>
                <th>Categoria</th>
                <th>Local</th>
                <th>valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='topic-tag'><div className='label nubank'>Nubank</div></td>
                <td>08/06/2023</td>
                <td>Casa</td>
                <td>Amazon</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td className='topic-tag'><div className='label nubank'>Nubank</div></td>
                <td>08/06/2023</td>
                <td>Lazer</td>
                <td>Cine holliúdy</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td className='topic-tag'><div className='label digio'>Digio</div></td>
                <td>08/06/2023</td>
                <td>Presente</td>
                <td>Amazon</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td className='topic-tag'><div className='label inter'>Inter</div></td>
                <td>08/06/2023</td>
                <td>Casa</td>
                <td>Shope</td>
                <td>R$ 100,00</td>
              </tr>
              <tr>
                <td className='topic-tag'><div className='label inter'>Inter</div></td>
                <td>08/06/2023</td>
                <td>Casa</td>
                <td>Shope</td>
                <td>R$ 100,00</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardTable;