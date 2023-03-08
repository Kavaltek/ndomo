import React, { useState, useEffect } from 'react';
import { 
  Col,
  Card 
} from 'react-bootstrap';
import appointment from './../util/estatistica.json'
import { 
  HiOutlineOfficeBuilding,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineCollection,
  HiOutlineTemplate
 } from "react-icons/hi";

export function CardsTodos() {
  const [appointments, setAppointments] = useState ([]);
  useEffect(() => {    
    loadPostFreed();
    console.log(appointments)
  })
  async function loadPostFreed(){
    await setAppointments(appointment.estatistica)
  }
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
                  <h6><b>Apartamentos</b></h6>
                 <b>400</b>
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
                 <b>20.000</b>
                </div>
                <HiOutlineUserGroup className='icon-card text-secondary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Tipologias</b></h6>
                 <b>50</b>
                </div>
                <HiOutlineTemplate className='icon-card text-success'/>
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