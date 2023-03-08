import React from 'react';
import { Cards } from '../components/Cards';
import Menu from '../components/Menu';
import user from './../assets/img1.jpg'
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
  Dropdown,
  Col
} from 'react-bootstrap';

function Perfil() {
  return <main className='d-flex dashbord h-100 w-100'>
    <Menu/>
    <section className='w-100'>
      <Container className='p-4'>
        <h6 className='mb-4'><b>Meu Perfil</b></h6>
        <div className='mt-5 mb-5'>
          <div className="avatar-perfil">
            <img src={user} alt="" />
          </div>
        </div>
        <Row>
          <Col className='mb-4' lg={6}>
            <Card className='card-perfil'>
            <Card.Header>
              <h5 className='mt-2'><b>Informações</b></h5>
            </Card.Header>
              <Card.Body>
                <Container className='p-0'>
                  <Row>
                    <Col md={6} className='mb-4'>
                    <div className="card-form-modal border">
                      <div className='label'><span>Nome</span></div>
                      <input type="text" class="form-control" placeholder="" value={'Daniel Kitanaxi Filipe'}/>
                      </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                    <div className="card-form-modal border">
                      <div className='label'><span>Email</span></div>
                      <input type="email" class="form-control" placeholder="" value={'danielkitanaxi@12gamil.com'}/>
                      </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                    <div className="card-form-modal border">
                      <div className='label'><span>Telefone</span></div>
                      <input type="text" class="form-control" placeholder="" value={'999 999 999'}/>
                      </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                    <div className="card-form-modal border">
                      <div className='label'><span>Genero</span></div>
                      <select class="form-select form-control">
                        <option selected>Masculino</option>
                        <option value="1">One</option>
                      </select>
                      </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                    <div className="card-form-modal border">
                      <div className='label'><span>Timpo</span></div>
                      <select class="form-select form-control">
                        <option selected>ADM</option>
                        <option value="1">One</option>
                      </select>
                      </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                    <div className="card-form-modal border">
                      <div className='label'><span>Morada</span></div>
                      <input type="text" class="form-control" placeholder="" value={'Luanda/cazenga'}/>
                      </div>
                    </Col>
                    <Col md={12}>
                    <div className="card-form-modal border">
                      <div className='label'><span>Alterar foto</span></div>
                      <input type="file" class="form-control"/>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
              <Card.Footer className='pb-3'>
              <Button variant="light">
            <b>Cancelar</b>
          </Button>
          <Button variant="dark">
            Adicionar
          </Button>
            </Card.Footer>
            </Card>
          </Col>
          <Col className='mb-4' lg={6}>
            <Card className='card-perfil'>
            <Card.Header>
              <h5 className='mt-2'><b>Informações</b></h5>
            </Card.Header>
              <Card.Body>
                <Container className='p-0'>
                  <Row>
                    <Col md={6}>
                    <div className="card-form-modal border">
                      <div className='label'><span>Senha</span></div>
                      <input type="password" class="form-control" placeholder="" value={'Daniel Kitanaxi Filipe'}/>
                      </div>
                    </Col>
                    <Col md={6}>
                    <div className="card-form-modal border">
                      <div className='label'><span>Confirma senha</span></div>
                      <input type="password" class="form-control" placeholder="" value={'danielkitanaxi@12gamil.com'}/>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
              <Card.Footer className='pb-3'>
              <Button variant="light">
            <b>Cancelar</b>
          </Button>
          <Button variant="dark">
            Adicionar
          </Button>
            </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  </main>;
}
export default Perfil;