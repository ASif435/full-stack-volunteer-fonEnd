import React, { useEffect, useState } from 'react';
import { vData } from '../../App';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from "../../logos/Group 1329.png";
import './home.css';

const Home = () => {
    const [item,setItem] = useState(vData);
    const history = useHistory();


    const hanleItem= (pd)=>{
        history.push(`/register/${pd}`)
    }


    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=>res.json())
        .then(data=> setItem(data))
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
                        <div className="col-xl-6">
                            <nav>
                                <NavLink className="link" to="/">Home</NavLink>
                                <NavLink className="link" to="/">Denation</NavLink>
                                <NavLink className="link" to="/">Events</NavLink>
                                <NavLink className="link" to="task">Task</NavLink>
                               
                            </nav>
                        </div>
                        <div className="col-xl-3">
                        <Link className="my-btn" to="/register">Register</Link>
                        <Link className="my-btn-bk" to="/admin">Admin</Link>
                        </div>
                    </div>
                    <div className="search-box-top">
                        <h3>I grow by helping people in need.</h3>
                        <div className="search-box">
                            <input type="text" className="form-control"/>
                            <button className="my-btn">search</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* items */}
            <div className="section items">
                <div className="container">
                    <div className="row">
                        {
                            item.map(pd=>{
                                const {title,id,img,_id} = pd;
                                return <div className="col-xl-3" key={pd.id}>
                                    <div className="item-box" onClick={()=>hanleItem(pd.id)}>
                                        <div className="item-img">
                                            <img src={img} alt="images" />
                                        </div>
                                        <div className="item-button">
                                            <h3>{title}</h3>
                                            {/* <Link to={`/register/${id}`}>{title}</Link> */}
                                        </div>
                                    </div>

                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;