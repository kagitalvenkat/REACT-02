import React from 'react'

const withAuth = (Component) => {
    const isAuthenticated = false;
  return function(props){
    if(isAuthenticated){
        return <Component {...props}/>
    }else{
        return <p style={{color:'tomato'}}>Please login to access..</p>
    }
    
  }
}

export default withAuth;