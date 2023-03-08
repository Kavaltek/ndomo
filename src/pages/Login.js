import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom';
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function Login() {
  const {authenticated, login} = useContext
  (AuthContext);

  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("submt", {email, password});
    login(email, password);
    
  }
  return  <main className='d-flex outh'>
    <ToastContainer/>
  <section className='w-100 h-100 section-background'>1</section>
  <section className='w-100 h-100 section-from d-flex align-items-center'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <img src={logo} alt="" width={140} className='mb-5'/>
          {/*<h3>{String(authenticated)}</h3>
          <h6 className='mb-4'><b>Acesse sua conta</b></h6>*/}
          <form onSubmit={handleSumit}>
          <div className="from-label border rounded">
          <div className='label'><span>E-mail</span></div>
          <div className="input-group">
              <input 
              type="email" 
              className="form-control" 
              placeholder="examplo@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <span className="input-group-text">
                <HiOutlineUser/>
              </span>
            </div>
          </div>
          <div className="from-label border rounded mb-3">
          <div className='label'><span>Senha</span></div>
          <div className="input-group">
              <input 
              type="password" 
              className="form-control" 
              placeholder="6+ strong caracteres"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-group-text">
                <HiOutlineLockClosed/>
              </span>
            </div>
          </div>
          <div className='mb-4 d-flex justify-content-between'>
            <Link  className='link-creae-con' to="/recover">Esqueceu sua senha</Link>
          </div>
          <div className="d-grid gap-2">
            <button 
            type='submit'
            className="btn btn-dark button"
            >Entrar</button>
          </div>
          {/** <Link to={'/dashbord'}>ss</Link>*/}
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
}

export default Login;