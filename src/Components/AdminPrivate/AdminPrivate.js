import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const AdminPrivate = ({ children, ...rest }) => {
    
  const [logged,setLogged] =useContext(UserContext);
    return (
        <>
             <Route
      {...rest}
      render={({ location }) =>
         logged? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: location }
            }}
          />
        )
      }
    />
        </>
    );
};

export default AdminPrivate;