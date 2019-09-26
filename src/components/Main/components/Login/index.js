import React from 'react';
import './style.css';

const Form = (props) => {
	const onClickHandler = e => {
		const inputs = e.target.parentNode.querySelectorAll('input');
		inputs.forEach( input => {
			if (!input.validity.valid) input.style.borderColor = 'red';
		})
	}
	const onSubmitHandler = e => {
		e.preventDefault();
		const inputs = e.target.querySelectorAll('input');
		inputs.forEach( input => {
			if (input.type === 'text') localStorage.setItem('login', input.value);
			localStorage.setItem('password', input.value);
		})
		props.history.push('/market');
	}
	const validateOnChange = e => {
		const target = e.target;
		target.reportValidity();
		if (target.validity.valid) target.style.border = '';
	}
	const onBlurHandler = e => {
		const target = e.target;
		if (target.tagName !== 'INPUT') return;
		if (!target.validity.valid) target.style.borderColor = 'red';
	}
	
	return (
		<div className='formContainer'>
			<form 
				onChange={validateOnChange} 
				onSubmit={onSubmitHandler}
				onBlur={onBlurHandler}>
				
				<input defaultValue={localStorage.getItem('login')} 
					placeholder='Login' type='text' minLength='8' required/>
				<input defaultValue={localStorage.getItem('password')} 
					placeholder='password' type='password' minLength='8' required/>
				<button onClick={onClickHandler} type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form;