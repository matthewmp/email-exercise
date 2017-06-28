import React from 'react';
import EMAILS from '../emails';

export default function Email(props){
	
	const mailbox = props.params.mailbox;
	const id = props.params.id	
	const email = EMAILS[mailbox][id];	
	return(
		<div>
			<p>{email.title}</p>
			<p>{email.from}</p>
			<p>{email.content}</p>
		</div>
	)
}