import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import logo from "../../logos/Group 1329.png";
import '../Home/home.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [logged,setLogged] = useContext(UserContext);
    const [users,setUsers] = useState([{
        isSignIn:false,
        name:"",
        email:"",
    }]);
    const hanleLogin=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        const user = result.user;
        const {displayName,email} = user;
        const loggedData = {
        isSignIn:true,
        name:displayName,
        email:email,
        }
       setUsers(loggedData)
       setLogged(loggedData)
       history.replace(from)
    // ...
  }).catch((error) => {
   console.log(error)
  });

    }
    return (
        <>
            <section className="login">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="images" />
                    </div>
                    <div className="login_form">
                        <h3>Login with</h3>
                        <div></div>
                        <div className="btn-login" onClick={hanleLogin}>
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                            <span>Continue with Google</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;