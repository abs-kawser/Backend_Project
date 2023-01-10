import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { AuthContext } from '../../contexts/AuthContext';
//import httpRequest from '../../hooks/httpRequest';

function Register() {
    const [formErrors, setFormErrors] = useState();
    //const { checkAuth, setCheckAuth } = useContext(AuthContext);
    //const navigate = useNavigate();

    // useEffect(() => {
    //     if (checkAuth.isAuth) {
    //         navigate('/');
    //     }
    // }, [checkAuth])

    // const registrationHandler = (e) => {
    //     e.preventDefault();
    //     let formData = new FormData(e.target);
    //     setFormErrors({});

    //     httpRequest('/user/register', 'POST', new FormData(e.target))
    //         .then(res => {
    //             if (res.status === 422) {
    //                 let tempError = {
    //                     username: [],
    //                     email: [],
    //                     password: [],
    //                     repassword: [],
    //                 };
    //                 res.data.errors.forEach((e, index) => {
    //                     tempError[e.param].push(
    //                         <li key={index} className='text-danger'>
    //                             {e.msg}
    //                         </li>
    //                     )
    //                 });
    //                 setFormErrors(tempError)
    //             }

    //             // if (res.status === 201) {
    //             //     e.target.reset();
    //             //     window.localStorage.setItem('token', res.data.token)
    //             //     setCheckAuth({
    //             //         isAuth: true,
    //             //         token: res.data.token,
    //             //         data: {
    //             //             email: res.data.email,
    //             //             username: res.data.username,
    //             //             role: res.data.role,
    //             //         }
    //             //     })
    //             // }
    //         })
    // }


    return (
        <>
            <div>
                {/* --------------------Breadcrumb------------ */}
                <div className="breadcrumb-container">
                    <nav className="breadcrumb container">
                        <h1 className="h1 category-title breadcrumb-title">Create Account</h1>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Create Account</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* -----------Cart page----------- */}
<section id="wrapper">
    <div className="container">
        <div className="row">
            <div id="content-wrapper" className="col-12">
                <section id="main">
                        <div className="login-page">
                        <div className="block-title">
                            <h2 className="title"><span>Create Account</span></h2>
                        </div>
                        <form method="post" onSubmit={(e) => registrationHandler(e)} encType="multipart/form- 
                                        data" className="card">
                            <div className="login-form">
                                <div className="form-group row ">
                            <label className="col-md-3 col-sm-12 form-control-label required">User name</label>
                                    <div className="col-md-9 col-sm-12">
                                        <input className="form-control" name="username" type="text" />
                                        <ul>
                                            {formErrors?.username}
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group row ">
                            <label className="col-md-3 col-sm-12 form-control-labe required">Email</label>
                                    <div className="col-md-9 col-sm-12">
                                        <input className="form-control" name="email" type="email" />
                                        <ul>
                                            {formErrors?.email}
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 col-sm-12 form-control-label">
                                        Password
                                    </label>
                                    <div className="col-md-9 col-sm-12">
                                        <input className="form-control" name="password" type="password" />
                                        <ul>
                                            {formErrors?.password}
                                        </ul>
                                        <ul>
                                            {formErrors?.repassword}
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 col-sm-12 form-control-label">
                                        Re Password
                                    </label>
                                    <div className="col-md-9 col-sm-12">
                                        <input className="form-control" name="repassword" type="password" />
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                <input className="btn btn-primary" defaultValue="Create Account" type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>
</div>
</>
    )
}

export default Register





















// import React from 'react'

// const Register = () => {
//     return (
//         <>
//             <form className='mx-auto'>
//                 <input type="text" name='username' placeholder="Enter your name" /><br /> <br />
//                 <input type="email" name='email' placeholder="Enter your email" /> <br /> <br />
//                 <input type="password" name='password' placeholder="Enter your password" /><br /><br />
//                 <button type="submit" class="btn btn-primary">Submit</button>
//             </form>
//         </>)
// }

// export default Register