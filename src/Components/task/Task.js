import React, { useContext, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../logos/Group 1329.png";
import '../Home/home.css';

const Task = () => {
    const [logged,setLogged] = useContext(UserContext);
    const [use,setUse]= useState([]);

    fetch('http://localhost:5000/users?email=' +logged.email)
    .then(res=>res.json())
    .then(data=>{
       setUse(data)
    })

    
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="logo">
                              <Link to="/">
                              <img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <nav>
                                <NavLink className="link" to="/">Home</NavLink>
                                <NavLink className="link" to="/">Denation</NavLink>
                                <NavLink className="link" to="/">Events</NavLink>
                                <NavLink className="link" to="/">Blogs</NavLink>
                                {logged.isSignIn? <span>{logged.name}</span>
                                    :  <Link className="my-btn" to="/login">login</Link>
                                }
                            </nav>
                        </div>
                        
                    </div>
                   
                </div>
            </section>
            <section className="users"> 
                <div className="container">
                    <div className="row">
                        {
                            use.map(res=>{
                                const {name,
                                email,
                                date,
                                desk,
                                organize,} = res;
                                return <div className="col-xl-4">
                                    <div className="item">
                                        <p>total :{use.length}</p>
                                        <p>email:{email} date: <span>{date}</span></p>
                                        <h5>{desk}</h5>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Task;