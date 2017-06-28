'use strict';

import React from 'react';
import {Link} from 'react-router';

export default function App(props){
  return(
    <div className="App" >
      <Link to={'/inbox'}>
  	    <p>Inbox</p>
  	  </Link> 

  	  <Link to={'/spam'}> 
  	    <p>Spam</p>
  	  </Link>  

  	  <div>
  	    {props.children}
  	  </div>
  	</div>
  );
};


