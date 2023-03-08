import React from 'react';
import { 
  Col,
  Card 
} from 'react-bootstrap';
import { 
  HiOutlineOfficeBuilding,
  HiOutlineUser,
  HiOutlineUserGroup
 } from "react-icons/hi";

export function Cards() {
  return (
    <>
    <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Prédios</b></h6>
                 <b>200</b>
                </div>
                <HiOutlineOfficeBuilding className='icon-card text-primary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Apartamentos</b></h6>
                 <b>800</b>
                </div>
                <HiOutlineOfficeBuilding className='icon-card text-success'/>
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
                <HiOutlineUser className='icon-card text-danger'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Moradores</b></h6>
                 <b>10.400</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-secondary'/>
              </Card.Body>
            </Card>
          </Col>
    </>
  );
}