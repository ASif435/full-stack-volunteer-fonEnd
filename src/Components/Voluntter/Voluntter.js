import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext, vData } from '../../App';
import '../Home/home.css';
import logo from "../../logos/Group 1329.png";

const Voluntter = () => {
    const [logged,setLogged] = useContext(UserContext);
    const [get,setGet] = useState([]);
    const {id} = useParams();
   const [detail,setDetail]=  useState(vData);
   const url = `http://localhost:5000/item/${id}`;
  
   useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
           setGet(data)
         
       })
   },[])

   const history = useHistory()
    const [user,setUser]=useState({
        name:"",
        email:"",
        date:"",
        desk:"",
        organize:"",
    });
    const eventChange = (e)=>{
        const newData = {...user};
        newData[e.target.name] = e.target.value;
        setUser(newData)
    }

    const hanleSubmit=(e)=>{
        e.preventDefault();
        const booksData = user;
        console.log(booksData)
        fetch('http://localhost:5000/post', {
        method: 'Post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json'
        },
         })
         .then(res=>res.json())
         .then(data=>{
             console.log('ok')
         })
         history.push('/task')
    }
    return (
        <div>
           
            <section className="register">
                <div className="container">
                        <div className="logo text-center">
                        <img src={logo} alt="logo" />
                        </div>
                    <div className="form">
                           
                        <form action="/" onSubmit={hanleSubmit}>
                            <input type="text" className="form-control"
                            name="name" required value={logged.name}
                            placeholder="full name" onChange={(e)=>eventChange(e)}
                            />
                            <input type="text" className="form-control"
                             name="email" required value={logged.email}
                            placeholder="user name or email" onChange={(e)=>eventChange(e)}
                            />
                            <input type="date" className="form-control"
                             name="date" required
                            placeholder=" Date" onChange={(e)=>eventChange(e)}
                            />
                            <input type="text" className="form-control"
                             name="desk" required
                            placeholder=" Desicription" onChange={(e)=>eventChange(e)}
                            />
                           
                            <input type="text" className="form-control"
                             name="organize" required value={get.title}
                            placeholder="organize Books the library" onChange={(e)=>eventChange(e)}
                            />
                            <button type="submit" className="btn-submit">Register</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Voluntter;