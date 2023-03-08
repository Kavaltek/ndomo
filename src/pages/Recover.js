import React from 'react';
import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom';
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";

function Recover() {
  return <main className='d-flex outh'>
  <section className='w-100 h-100 section-background'>1</section>
  <section className='w-100 h-100 section-from d-flex align-items-center'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <img src={logo} alt="" width={100} className='mb-5'/>
          <h6 className='mb-4'><b>Recuperar conta</b></h6>
          <form action="">
          <div className="from-label border rounded mb-3">
          <div className='label'><span>E-mail</span></div>
          <div className="input-group">
              <input type="email" className="form-control" placeholder="examplo@mail.com"/>
              <span className="input-group-text">
                <HiOutlineUser/>
              </span>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
          <p className='link-creae-con'> Verifique o seu email</p>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-dark" type="button">Enviar email</button>
          </div>
          <div className='mt-4 text-center'>
          <Link  className='link-creae-con' to="/">Voltar</Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>;
}

export default Recover;