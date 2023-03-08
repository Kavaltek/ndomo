import React,  { useState, useEffect } from 'react';
import { CardsGestUser } from '../../components/CardsGestUser';
import Menu from '../../components/Menu';
import appointment from './../../util/porteiro.json'
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineNewspaper,
  HiDotsVertical,
  HiOutlineUser,
  HiPlusSm,
  HiSearch,
  HiOutlineEye
} from 'react-icons/hi';
import { 
  Container,
  Row,
  Card,
  Tooltip,
  Button,
  OverlayTrigger,
  Dropdown,
  Col,
  Modal
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

function Porteiros() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [appointments, setAppointments] = useState ([]);
  useEffect(() => {    
    loadPostFreed();
    console.log(appointments)
  })
  async function loadPostFreed(){
    await setAppointments(appointment.porteiro)
  }

  return <main className='d-flex dashbord h-100 w-100'>
    <Menu/>
    <section className='w-100'>
    <Container className='p-4'>
      <h5 className='mb-4'><b>Gestão de usuarios</b></h5>
      <Row>
        <CardsGestUser/>
      </Row>
      <div className="btn-group btn-group-sm NavLink-tabl-tag">
      <NavLink to='/adms' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbl">Administradores</NavLink>
        <NavLink to='/porteiros' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark">Porteiros</NavLink>
        <NavLink to='/moradores' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbr">Moreadores</NavLink>
      </div>
      <Card className='card-table border-top-l'>
      <Card.Body className='d-flex justify-content-between'>
              <div>
                <div><h6><b>Lista de Porteiros</b></h6></div>
              </div>
              <div className='d-flex'>
              <div className='me-4'>
              <div className="input-group input-group-search-tab border">
                  <input type="text" className="form-control" placeholder="Pesquisar" />
                  {['bottom'].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`} className='font-13'>
                        Pesquisar
                      </Tooltip>
                    }
                  >
                    <button type="button" className="btn">
                      <HiSearch/>
                    </button>
                  </OverlayTrigger>
                ))}
                  
                </div>
              </div>
              <div className='me-2'>
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
              <div>
              {['top'].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`} className='font-13'>
                        Add porteiros
                      </Tooltip>
                    }
                  >
                    <Button variant="dark" onClick={handleShow} className='btn-dwoArq'><HiPlusSm/></Button>
                  </OverlayTrigger>
                ))}
              </div>
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
                  <th>Estado</th>
                  <th className='pe-4 text-right'>Acção</th>
                </tr>
              </thead>
              <tbody>
              {
                  appointments?.map(porteiro => (
                    <tr>
                    <td className='ps-4'>{porteiro.number}</td>
                    <td>
                    <div className="avatar">
                      <HiOutlineUser/>
                    </div>
                    </td>
                    <td>{porteiro.nome}</td>
                    <td>{porteiro.email}</td>
                    <td>{porteiro.telefone}</td>
                    <td>
                    <span class="badge rounded-pill ps-3 pe-3 bg-success">Activo</span>
                    </td>
                    <td className='pe-4 text-right'>
                    <Dropdown>
                      <Dropdown.Toggle className='btn-dropdown' id="dropdown-basic">
                        <HiDotsVertical/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='border-0 shadow-sm'>
                        <Dropdown.Item className='font-14' href="#/action-2">Desativar</Dropdown.Item>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Porteiros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} className='mb-4'>
            <div className="card-form-modal border">
          <div className='label'>Nome</div>
          <input type="text" class="form-control" placeholder=""/>
          </div>
            </Col>
            <Col md={12} className='mb-4'>
            <div className="card-form-modal border">
          <div className='label'>Email</div>
          <input type="email" class="form-control" placeholder=""/>
          </div>
            </Col>
            <Col md={6} className='mb-4'>
            <div className="card-form-modal border">
          <div className='label'>Telefone</div>
          <input type="number" class="form-control" placeholder=""/>
          </div>
            </Col>
            <Col md={6} className='mb-4'>
            <div className="card-form-modal border">
          <div className='label'>Genero</div>
          <select className="form-select form-control" aria-label="Default select example">
            <option selected>Maculino</option>
            <option value="1">Fermenino</option>
            <option value="1">Gay</option>
            <option value="1">Binario</option>
          </select>
          </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            <b>Cancelar</b>
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
  </main>;
}
export default Porteiros;