import React, { useState } from 'react';
import '../Home/home.css';
import logo from "../../logos/Group 1329.png";
import { Link, NavLink } from 'react-router-dom';
const AdEvent = () => {

    const [user,setUser]=useState({
        title:"",
        desk:"",
        date:"",
        file:"",
    });
    const eventChange = (e)=>{
        const newData = {...user};
        newData[e.target.name] = e.target.value;
        setUser(newData)
       
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
                                    <h3>Add Events</h3>
                                </div>
                                <div className="center-list">
                                    <div className="white">
                                    <div className="list-form">
                                        <form action="/">
                                            <p>Event Title</p>
                                        <input type="Enter Title" className="form-control"
                                        name="title" required
                                        placeholder="full name" onChange={(e)=>eventChange(e)}
                                        />
                                        <p>Event Date</p>
                                        <input type="date" className="form-control"
                                        name="date" required
                                        placeholder="user name or email" onChange={(e)=>eventChange(e)}
                                        />
                                        <p>photo </p>
                                        <input type="file" className="form-control"
                                        name="date" 
                                        placeholder="user name or email" onChange={(e)=>eventChange(e)}
                                        />
                                         <p>Description</p>
                                        <textarea name="desk" placeholder="Description">

                                        </textarea>
                                        <button type="submit" className="my-btn">sumit</button>
                                        </form>
                                    </div>
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

export default AdEvent;