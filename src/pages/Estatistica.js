import React from 'react';
import { CardsTodos } from '../components/CardsTodos';
import Menu from '../components/Menu';
import { 
  Container,
  Row
} from 'react-bootstrap';

function Estatistica() {
  return <main className='d-flex dashbord h-100 w-100'>
    <Menu/>
    <section className='w-100'>
      <Container className='p-4'>
        <h5 className='mb-4'><b>Estatística</b></h5>
        <Row>
          <CardsTodos/>
        </Row>
      </Container>
    </section>
  </main>;
}
export default Estatistica;