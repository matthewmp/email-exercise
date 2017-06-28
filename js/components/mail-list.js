'use strict';
import React from 'react';
import {Link} from 'react-router';


export default function MailList(props){    
  const emails = Object.keys(props.emails).map((email, ind) =>{
    const emailObj = props.emails[email];

    return (

    	<Link to={`/email/${props.mailbox}/${emailObj.id}`} key={ind} data={{props}}>
    	  <li key={ind}> {emailObj.title}</li>
    	</Link>
    )
  });

  return(
    <ul> {emails} </ul>
  )
};

