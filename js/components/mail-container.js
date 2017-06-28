'use strict';
import React from 'react';
import EMAILS from '../emails';
import MailList from './mail-list';

export default function(props){
  const mailbox = props.params.mailbox_name;
  return (
    <div>
      <h1 id="mailbox-title">{mailbox.toUpperCase()}</h1>
	  <MailList emails={EMAILS[mailbox]} mailbox={mailbox}/>
	</div>  
  );
};