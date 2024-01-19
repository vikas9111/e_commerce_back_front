import { useState } from 'react';

export default function SignUp() {

	// States for registration
  const [sign_up_data, setSignUpData] = useState({
		username: '',
		name: '',
		email: '',
		password: ''
	});
	
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [success_massage, setSuccessMassage] = useState('');
	const [error_massages, setErrorMassages] = useState('');


  // Handling the username change
  const hanleSignUpForm = (e) => {
		setSignUpData({
			...sign_up_data,
			[e.target.name]: e.target.value,
		});
	};

	// Handling the form submission
	const handleSubmit = async(e) => {
		e.preventDefault('');
		setSuccessMassage('');
		setErrorMassages(error_massages);
		const response = await fetch('/user_registrations', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ user: sign_up_data })
				})
		const data = await response.json();

		if (data.status === 200) {
			setSuccess(true);
			setError(false);
			setSuccessMassage(data.message);
		}
		else{
			setError(true);
			setSuccess(false);
			console.log("data",data)
			const error_massages = Object.entries(data.errors).map(([field, error_massages]) => {
				return <span>{field + ' ' + error_massages.join(',')}<br	/></span>
			})
			
			setErrorMassages(error_massages);
		}
		setSubmitted(true);
	};

	return (
		<div className="form">
			{/* Calling to the methods */}
			<div className="mask d-flex align-items-center h-100 gradient-custom-3 mt-3">
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-9 col-lg-7 col-xl-6">
							<div className="card" style={{'border-radius': '15px'}}>
								<div className="card-body p-5">
									<h2 className="text-uppercase text-center mb-5">Create an account</h2>
									<div className="form-outline mb-4">
										{<p className="alert alert-success" style={{display: success && !error ? '' : 'none',}}>{ success_massage }</p>}
										{<p className="alert alert-danger" style={{display: !success && error ? '' : 'none'}} >{ error_massages }</p>}
									</div>
									<form>
										<div className="form-outline mb-4">
											<label className="form-label" for="form3Example1cg" >UserName</label>
											<input  name='username' id="form3Example1cg" onChange={hanleSignUpForm } className="form-control form-control-lg" value={sign_up_data.username} type="text" />
										</div>

										<div className="form-outline mb-4">
											<label className="form-label" for="form3Example1cg" >Name</label>
											<input  name='name' id="form3Example1cg" onChange={hanleSignUpForm } className="form-control form-control-lg" value={sign_up_data.name} type="text" />
										</div>

										<div className="form-outline mb-4">
											<label className="form-label" for="form3Example1cg" >Email</label>
											<input  name='email' id="form3Example1cg" onChange={hanleSignUpForm } className="form-control form-control-lg" value={sign_up_data.email} type="email" />
										</div>

										<div className="form-outline mb-4">
											<label className="form-label" for="form3Example1cg" >Password</label>
										<input  name='password' id="form3Example1cg" onChange={hanleSignUpForm } className="form-control form-control-lg" value={sign_up_data.password} type="password" />
										</div>

										<div className="d-flex justify-content-center">
											<button onClick={handleSubmit} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="submit"> Register </button>
										</div>
									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}