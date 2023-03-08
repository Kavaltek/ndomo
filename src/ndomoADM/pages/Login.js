import React, { useContext, useEffect, useState } from 'react';
import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom';
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { authContext } from '../contexts/authContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logged, setLogged } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await axios
        .post("https://reqres.in/api/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data.status === 401) {
              toast.error("Information not reconize in our system", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
            if (res.data.status === 200) {
              localStorage.setItem("userToken", res.data.token);
              setLogged(true);
              navigate("/profil");
            }
          }
        });
    } else {
      toast.error("Please fill the form", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = () => {
    if (localStorage.getItem("userToken")) {
      setLogged(true);
      console.log("You are connected");
      navigate("/profil");
    }
  };

  return  <main className='d-flex outh'>
    <ToastContainer/>
  <section className='w-100 h-100 section-background'>1</section>
  <section className='w-100 h-100 section-from d-flex align-items-center'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <img src={logo} alt="" width={170} className='mb-5'/>
          {/*<h6 className='mb-4'><b>Acesse sua conta</b></h6>*/}
          <form onSubmit={handleLogin}>
          <div className="from-label border rounded">
          <div className='label'><span>E-mail</span></div>
          <div className="input-group">
              <input 
              type="email" 
              className="form-control" 
              placeholder="examplo@mail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
          <Link to={'/dashbord'}>ss</Link>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
}

export default Login;