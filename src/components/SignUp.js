import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';






const SignUp = () => {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
    let history = useHistory();


    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (credentials.password === credentials.cpassword) {

            const response = await fetch('https://api-authify.herokuapp.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            console.log(json);
            if (json.success === true) {
                await localStorage.setItem('token', json.authToken)
                history.push('/')
            }
            else {
                history.push('/signup')

            }
        }

    }




    return (
        <div>
            <section className="py-5 mt-5">
                <div className="container py-5">
                    <div className="row mb-4 mb-lg-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-success mb-2">Sign up</p>
                            <h2 className="fw-bold">Welcome</h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6 col-xl-4">
                            <div className="card">
                                <div className="card-body text-center d-flex flex-column align-items-center">
                                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                    </svg></div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3"><input required onChange={onChange} value={credentials.name} className="form-control" type="text" name="name" placeholder="Email" /></div>
                                        <div className="mb-3"><input required onChange={onChange} value={credentials.email} className="form-control" type="email" name="email" placeholder="Email" /></div>
                                        <div className="mb-3"><input required onChange={onChange} value={credentials.password} className="form-control" type="password" name="password" placeholder="Password" />
                                        </div>
                                        <div className="mb-3"><input required onChange={onChange} value={credentials.cpassword} className="form-control" type="password" name="cpassword" placeholder="Confirm Password" />
                                        </div>
                                        <div className="mb-3"><button disabled={credentials.name.length < 2 || credentials.email.length < 8 || credentials.password.length < 8 || credentials.cpassword.length < 8 || credentials.password !== credentials.cpassword} className="btn btn-primary shadow d-block w-100" type="submit">Sign up</button></div>
                                        <p className="text-muted">Already have an account?&nbsp;<Link to="/signin">Log in</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp