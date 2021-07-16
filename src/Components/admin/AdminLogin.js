import React, { createContext, useContext, useEffect, useState } from 'react';
import '../Home/home.css';
import logo from "../../logos/Group 1329.png";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

export const AdminContext = createContext();
const Voluntter = () => {
    const location = useLocation();
    
  const [logged,setLogged] =useContext(UserContext);
  
    const email ="admin@gmail.com";
    const password = "asif1234";
    const history = useHistory();
    const [user,setUser]=useState({
        password:"",
        email:"",
    });
    const eventChange = (e)=>{
        const newData = {...user};
        newData[e.target.name] = e.target.value;
        setUser(newData)
    }
    
    const hanleSubmit=(e)=>{
        e.preventDefault();
        if(user.email ===email && user.password===password){
            alert('welcome to admin panel')
        //    const aname = true;
           setLogged(true)
           history.push('/deshboard')
          
        }
       else{
           alert('sorry email or password wrong')
       }
       const { from } = location.state || { from: { pathname: "/" } };
           history.replace(from)
    }
    return (
        <>
           
            <section className="register">
                <div className="container">
                        <div className="logo text-center">
                        <img src={logo} alt="logo" />
                        </div>
                    <div className="form">
                           
                        <form  onSubmit={hanleSubmit}>
                            <input type="text" className="form-control"
                            name="email" required
                            placeholder="enter admin email" onChange={(e)=>eventChange(e)}
                            />
                            <input type="password" className="form-control"
                             name="password" required
                            placeholder="enter password" onChange={(e)=>eventChange(e)}
                            />
                          
                            <button type="submit" className="btn-submit">login now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Voluntter;