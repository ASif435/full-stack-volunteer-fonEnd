
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import Voluntter from './Components/Voluntter/Voluntter';
import Login from './Components/Login/Login';
import Task from './Components/task/Task';
import AdminLogin from './Components/admin/AdminLogin';
import AdminPanel from './Components/admin/AdminPanel';
import AdEvent from './Components/admin/AdEvent';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminPrivate from './Components/AdminPrivate/AdminPrivate';
 export const vData = [
  {title:"Child Support",
  img: "https://i.ibb.co/PcV8qQ8/animal-Shelter.png",
  id:1

},
  {
  title:"Refuge shelter", 
  img:"https://i.ibb.co/Gn24Z3S/babySit.png",
  
  id:2
},
  {
  title:"Food Charity", 
  img:"https://i.ibb.co/Y32TcWh/clean-Water.png",
  
  id:3
},
  {
  title:"Host a clothing swap.", 
  img:"https://i.ibb.co/F83b6Hm/child-Support.png",
  
  id:4
},
  {
  title:"Host a river clean-up.", 
  img:"https://i.ibb.co/dJT68gS/bird-House.png",
  
  id:5
},
  {
  title:"Clean water for children", 
  img:"https://i.ibb.co/R3NH5tz/food-Charity.png",
  
  id:6
},
  {
  title:"Good education", 
  img:"https://i.ibb.co/SvP6qhb/extra-Volunteer.png",
  
  id:7
},
  {
  title:"New books for children", 
  img:"https://i.ibb.co/HqS4gcP/drive-Safety.png",
  
  id:8
},
  {
  title:"Host a study group.", 
  img:"https://i.ibb.co/f1J7L2P/cloth-Swap.png",
  
  id:9
},
  {
  title:"Build birdhouses for your neighbors", 
  img:"https://i.ibb.co/0MxPgxj/clearn-Park.png",
  
  id:10
},
  {
  title:"Organize books at the library", 
  img:"https://i.ibb.co/fG0yJCL/refuse-Shelter.png",
  
  id:11
},
  {
  title:"Give a seminar on driving safety.", 
  img:"https://i.ibb.co/gRgNhf3/newBooks.png",
  
  id:12
},
  {
  title:"Give free music  lessons.", 
  img:"https://i.ibb.co/S6wL5sj/music-Lessons.png",
  
  id:13
},
  {
  title:"Teach people how  to register to vote.", 
  img:"https://i.ibb.co/M5m9HDj/library-Books.png",
  
  id:14
},
  {
  title:"Clean up your ", 
  img:"https://i.ibb.co/M5m9HDj/library-Books.png",
  
  id:15
},
  {
  title:"Give IT help to  local adults", 
  img:"https://i.ibb.co/k9RM2yf/ITHelp.png",
  
  id:16
},
  {
  title:"Foster a shelter  animal.", 
  img:"https://i.ibb.co/F0gjYTx/good-Education.png",
  
  id:17
},
  {
  title:"Babysit during PTA  meetings..", 
  img:"https://i.ibb.co/RPbhwRZ/vote-Register.png",
  
  id:18
},
  {
  title:"Collect school  supplies.", 
  img:"https://i.ibb.co/vDtCm8j/stuffed-Animals.png",
  
  id:19
},
];
export const UserContext = createContext();

function App() {
  const [logged,setLogged] = useState(false);
  return (
    <UserContext.Provider value={[logged,setLogged]}>
     <Router>
       <Switch>
         <Route path="/" exact>
          <Home/>
         </Route>
         <PrivateRoute path="/register/:id">
           <Voluntter/>
         </PrivateRoute>
         <Route path="/login">
           <Login/>
         </Route>
         <PrivateRoute path="/task">
           <Task/>
         </PrivateRoute>
         <Route path="/admin">
           <AdminLogin/>
         </Route>
         <AdminPrivate path="/deshboard">
           <AdminPanel/>
         </AdminPrivate>
         <Route path="/addevent">
          <AdEvent/>
         </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
