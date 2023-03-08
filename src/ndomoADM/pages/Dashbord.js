import React, { useState, useEffect } from 'react';
import appointment from './../util/moradores.json'
import { Cards } from '../components/Cards';
import Menu from './../components/Menu';
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineNewspaper,
  HiDotsVertical,
  HiOutlineUser
} from 'react-icons/hi';
import { 
  Container,
  Row,
  Card,
  Tooltip,
  Button,
  OverlayTrigger,
  Dropdown
} from 'react-bootstrap';

function Dashbord() {
  const [appointments, setAppointments] = useState ([]);
  useEffect(() => {    
    loadPostFreed();
    console.log(appointments)
  })
  async function loadPostFreed(){
    await setAppointments(appointment.moradores)
  }
  return <main className='d-flex dashbord h-100 w-100'>
    <Menu/>
    <section className='w-100'>
      <Container className='p-4'>
        <h5 className='mb-4'><b>Painel de controle</b></h5>
        <Row>
          <Cards/>
        </Row>
        <Card className='card-table'>
            <Card.Body className='d-flex justify-content-between'>
              <div>
                <div><h6><b>Moradores</b></h6></div>
              </div>
              <div>
              {[/*'top', 'right', 'bottom', */'left'].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`} className='font-13'>
                        Baixar arquivos
                      </Tooltip>
                    }
                  >
                    <Button variant="dark" className='btn-dwoArq'><HiOutlineNewspaper/></Button>
                  </OverlayTrigger>
                ))}
              </div>
            </Card.Body>
             <div className='h-tablet'>
              <table className="table" striped bordered hover>
                <thead>
                  <tr>
                    <th className='ps-4'>N</th>
                    <th>Avatar</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Numero</th>
                    <th>Data de entrada</th>
                    <th>Referencia</th>
                    <th>Estado</th>
                    <th className='pe-4 text-right'>Acção</th>
                  </tr>
                </thead>
                <tbody>
                {
                    appointments?.map(moradores => (
                      <tr>
                      <td className='ps-4'>{moradores.number}</td>
                      <td>
                      <div className="avatar">
                        <HiOutlineUser/>
                      </div>
                      </td>
                      <td>{moradores.nome}</td>
                      <td>{moradores.email}</td>
                      <td>{moradores.telefone}</td>
                      <td>{moradores.data}</td>
                      <td>{moradores.referencia}</td>
                      <td>
                      <span class="badge rounded-pill ps-3 pe-3 bg-success">Activo</span>
                      </td>
                      <td className='pe-4 text-right'>
                      <Dropdown>
                        <Dropdown.Toggle className='btn-dropdown' id="dropdown-basic">
                          <HiDotsVertical/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='border-0 shadow-sm'>
                          <Dropdown.Item className='font-14' href="#/action-1">Ver</Dropdown.Item>
                          <Dropdown.Item className='font-14' href="#/action-2">Editar</Dropdown.Item>
                          <Dropdown.Item className='font-14' href="#/action-3">Renviar senha</Dropdown.Item>
                          <Dropdown.Item className='font-14' href="#/action-3">Apagar</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      </td>
                    </tr>
                    ))
                  }

                </tbody>
              </table>
             </div>
            <Card.Body>
              <div className='pagination d-flex justify-content-between'>
                <div><h6><b>3 ate 10</b></h6></div>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn"><HiChevronLeft className='icon-btn-pagination'/></button>
                  <button type="button" className="btn"><HiChevronRight className='icon-btn-pagination'/></button>
                </div>
              </div>
            </Card.Body>
        </Card>
      </Container>
    </section>
  </main>;
}
export default Dashbord;