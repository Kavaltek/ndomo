import React from 'react';
import { 
  Col,
  Card 
} from 'react-bootstrap';
import { 
  HiOutlineUserGroup
 } from "react-icons/hi";

export function CardsGestUser() {
  return (
    <>
    <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Total de usuarios</b></h6>
                 <b>12.000</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-primary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Administradores</b></h6>
                 <b>40</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-success'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Porteiros</b></h6>
                 <b>50</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-danger'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Moradores</b></h6>
                 <b>10.000</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-secondary'/>
              </Card.Body>
            </Card>
          </Col>
    </>
  );
}