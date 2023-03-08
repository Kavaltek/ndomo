import React from 'react';
import { 
  Col,
  Card 
} from 'react-bootstrap';
import { 
  HiOutlineOfficeBuilding,
  HiOutlineUser,
  HiOutlineCollection,
  HiOutlineTemplate
 } from "react-icons/hi";

export function CardsArea() {
  return (
    <>
    <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Prédios</b></h6>
                 <b>300</b>
                </div>
                <HiOutlineOfficeBuilding className='icon-card text-primary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Tipologias</b></h6>
                 <b>20</b>
                </div>
                <HiOutlineTemplate className='icon-card text-success'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Apartamnentos</b></h6>
                 <b>300</b>
                </div>
                <HiOutlineOfficeBuilding className='icon-card text-danger'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Serviços</b></h6>
                 <b>50</b>
                </div>
                <HiOutlineCollection className='icon-card text-secondary'/>
              </Card.Body>
            </Card>
          </Col>
    </>
  );
}