import axios from 'axios'
import { useState } from 'react';
import './Form.css'
const Form = () => {
    // post data from server 

    const [formErrors, setFormErrors] = useState();

    const registrationHandler = (e) => {
        e.preventDefault();

        // let info = {
        //     username: e.target.username.value,
        //     email: e.target.email.value,
        //     password: e.target.password.value,
        // }

        // console.log(info);

        let formData = new FormData(e.target)
        
        // fatching part post 
        fetch('http://localhost:8000/api/user/register', {
            method: "POST",
            headers: {
                //'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
           // body: JSON.stringify(info),
            body: formData
        })

        .then(async (res) => {
       let data = await res.json();

            return {
                status: res.status,
                data,
            }
        })

        .then(res => {
            console.log(res);
            if(res.status === 422){
                let tempError ={                   
                        username: [],
                        email: [],
                        password: [],
                        repassword: [],
                                    
                };
                res.data.errors.forEach((e,index) => {
                    tempError[e.param].push(
                        <li key={index} className='text-denger'>  
                            {e.msg}
                        </li>
                    )
                });
                 setFormErrors(tempError);
            }
            // rest from functionality
             if (res.status ===201){
                e.target.reset();
             }
        })

    }

    // something add 
    // get user server
    // function getUserByemail() {
    // let email ='user2@so.com'
    // fetch('http://localhost:8000/api/user/get/'+email,{
    //     headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //         }
    // })
    // .then(res => res.json())
    // .then(res => {
    //     console.log(res);
    // })
    // };

    // delete user 
    // function deleteUserByemail() {
    // let email ='bali@gmail.com'
    // fetch('http://localhost:8000/api/user/delete/'+email,{
    //     headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //         }
    // })
    // .then(res => res.json())
    // .then(res => {
    //     console.log(res);
    // })
    // };


    // geting data from server 
    // const showData = (e) => {
    //     axios(
    //         'http://localhost:8000/api/user/all',
    //     )
    //         .then((res) => {
    //             console.log(res.data, "fetch data form api");
    //         })
    //     console.log("hi all");

    // }




    //onSubmit={(e) => registrationHandler(e)}
    return (
        <>
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
                            <label className="col-md-3 col-sm-12 form-control-label" >
                                RePassword
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
        </>






        //         <div className='first'>
        //             <form method='post' onSubmit={(e) => registrationHandler(e)} class="row g-3">
        //                 <div class="col-auto">
        //                     <label className=" form-control-label required">User name</label>
        //                     <input className="form-control" name="username" type="text" />

        //                 </div>
        //                 <div class="col-auto">
        //                     <label>Email</label>
        //                     <input type="text" name='email' className="form-control" placeholder="email" />
        //                 </div>
        //                 <div class="col-auto">
        //                     <label for="inputPassword2" >Password</label>
        //                     <input type="password" name='password' className="form-control" placeholder="Password" />
        //                 </div>
        //                 {/* <div class="col-auto">
        // <input className="btn btn-primary mt-4" defaultValue="Create Account" type="submit" />
        // </div> */}
        //             </form>
        //             <button type="" className='btn btn-primary mt-4 ' onClick={(e) => showData(e)}>All Data</button>

        //             {/*  */}
        //             {/* <button type="" className='btn btn-primary mt-4 ' onClick={() => getUserByemail()}>Get User
        //     </button> */}

        //             {/* <button type="" className='btn btn-primary mt-4 ' onClick={deleteUserByemail}>Delete User
        //     </button> */}
        //         </div>

    );
}

export default Form;
//deleteUserByemail