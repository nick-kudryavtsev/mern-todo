import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import axios from "axios";

//  styles
import './Auth.scss'

//  components
import Reg from "../Reg/Reg";

const Auth = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form)
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/reg', {...form}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => console.log(response))
        } catch (err){
            console.error(err)
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <>
                    <div className="container">
                        <div className="auth">
                            <Route path="/login">
                                <h3>Авторизация</h3>
                                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                type="email"
                                                name="email"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="input-field col s12">
                                            <input
                                                type="password"
                                                name="password"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <button className="wawes-effect wawes-light btn blu">
                                            Войти
                                        </button>

                                        <Link to="/reg" className="btn-outline btn-reg">Нет аккаунта?</Link>
                                    </div>
                                </form>
                            </Route>
                            <Route path="/reg">
                                <Reg
                                    changeHandler={changeHandler}
                                    registerHandler={registerHandler}

                                />
                            </Route>
                        </div>
                    </div>
                </>
            </Switch>
        </BrowserRouter>
    );
};

export default Auth;
