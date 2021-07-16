import React, { useEffect, useState } from 'react';
import '../Home/home.css';
import logo from "../../logos/Group 1329.png";
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';

const AdminPanel = () => {
 
    const [data,setData] = useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/admin')
        .then(res=>res.json())
        .then(data =>{
            setData(data)
        })
    },[])

    const deleted = (id)=>{
        
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
             })
             .then(res=>res.json())
             .then(data=>{
                 console.log('ok')
             })
       
    }   
    return (
        <>
            <div className="section admin-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="menu">
                                <div className="logo-m">
                                    <img src={logo} alt="" />
                                </div>
                                <NavLink to="/deshboard" className="linked" activeClassName="active">volunter list</NavLink> <br />
                                <NavLink to="/addevent" className="linked" activeClassName="active">add event</NavLink>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="center-item">
                                <div className="center-top">
                                    <h3>Volunteer Register List</h3>
                                </div>
                                <div className="center-list">
                                    <div className="white">
                                    <div className="list-menu">
                                        <ul>
                                            <li>Name</li>
                                            <li>Email ID</li>
                                            <li>Registation Date</li>
                                            <li>Volunteer list</li>
                                            <li>action</li>
                                        </ul>
                                    </div>
                                 {
                                     data.map(users=>{
                                    const {name,email,date,desk} = users;
                                    return <div className="list-items" key={users._id}>
                                     <ul>
                                           <li>{name}</li>
                                            <li>{email}</li>
                                            <li>{date}</li>
                                            <li>{desk}</li>
                                           <li><button onClick={()=>deleted(users.date)}><img src="https://icon-library.com/images/delete-icon/delete-icon-13.jpg" alt="" /></button></li>
                                             </ul>
                                            </div>
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;