import React,  { useState, useEffect } from 'react';
import { CardsArea } from '../../components/CardsArea';
import Menu from '../../components/Menu';
import appointment from './../../util/predios.json'
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineNewspaper,
  HiDotsVertical,
  HiPlusSm,
  HiSearch
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
import { NavLink} from 'react-router-dom';

function Area() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [appointments, setAppointments] = useState ([]);
  useEffect(() => {    
    loadPostFreed();
    console.log(appointments)
  })
  async function loadPostFreed(){
    await setAppointments(appointment.predios)
  }

  return <main className='d-flex dashbord h-100 w-100'>
    <Menu/>
    <section className='w-100'>
    <Container className='p-4'>
      <h5 className='mb-4'><b>Area</b></h5>
      <Row>
        <CardsArea/>
      </Row>
      <div className="btn-group btn-group-sm NavLink-tabl-tag">
      <NavLink to='/area' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbl">Predios</NavLink>
        <NavLink to='/tipologia' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark">Tipologias</NavLink>
        <NavLink to='/apartamento' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark">Apartamento</NavLink>
        <NavLink to='/servico' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-dark btnRbr">Serviços</NavLink>
      </div>
      <Card className='card-table border-top-l'>
      <Card.Body className='d-flex justify-content-between'>
          <div>
                <div><h6><b>Lista de predios</b></h6></div>
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
                        Add predios
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
                  <th className='ps-4'>Numero</th>
                  <th>Tipologia</th>
                  <th>Predio</th>
                  <th>Estado</th>
                  <th>Complemento</th>
                  <th className='pe-4 text-right'>Acção</th>
                </tr>
              </thead>
              <tbody>
                {
                  appointments?.map(predios => (
                    <tr>
                    <td className='ps-4'>{predios.numero}</td>
                    <td>{predios.tipologia}</td>
                    <td>{predios.Complemento}</td>
                    <td>
                    <span class="badge rounded-pill ps-3 pe-3 bg-success">Activo</span>
                    </td>
                    <td>{predios.predio}</td>
                    <td className='pe-4 text-right'>
                    <Dropdown>
                      <Dropdown.Toggle className='btn-dropdown' id="dropdown-basic">
                        <HiDotsVertical/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='border-0 shadow-sm'>
                        <Dropdown.Item className='font-14' href="#/action-2">Editar</Dropdown.Item>
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
          <Modal.Title>Adicionar Tipologia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <div className="card-form-modal border">
          <div className='label'>Tipologia</div>
          <input type="text" class="form-control" placeholder=""/>
          </div>
            </Col>
            <Col md={6}>
            <div className="card-form-modal border">
          <div className='label'>Nota</div>
          <input type="text" class="form-control" placeholder=""/>
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
export default Area;