import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'


export default function Header() {
   const {userLogin} =useSelector(state=>state.QuanLyNguoiDungReducer);
   const renderLogin =()=> {
       if(userLogin !== null) {
        return <NavLink activeStyle={{background:'#fff',color:'#000'}}   exact to="/profile" activeClassName="active" className="nav-link">Hello! {userLogin.taiKhoan}</NavLink>     
       }
       else {
           return <NavLink activeStyle={{background:'#fff',color:'#000'}}   exact to="/login" activeClassName="active" className="nav-link">Login</NavLink>
       }
   }
  return (
    <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <NavLink  className="navbar-brand" to="/">ReactJS </NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink activeStyle={{background:'#fff',color:'#000'}} exact to="/home" activeClassName="active" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink activeStyle={{background:'#fff',color:'#000'}} exact to="/about" activeClassName="active" className="nav-link" >About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink activeStyle={{background:'#fff',color:'#000'}} exact to="/register" activeClassName="active" className="nav-link" >Register</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink activeStyle={{background:'#fff',color:'#000'}}   exact to="/hoc" activeClassName="active" className="nav-link">HOC (Higher order component)</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink activeStyle={{background:'#fff',color:'#000'}}   exact to="/antdemo" activeClassName="active" className="nav-link">ANT DESIGN</NavLink>
                            </li>

                            <li className="nav-item">
                                {renderLogin()}
                            </li>



                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" exact to="/usestate">UseStateDemo</NavLink>
                                    <NavLink className="dropdown-item" exact to="/useeffect">UseEffectDemo</NavLink>
                                    <NavLink className="dropdown-item" exact to="/reduxhook">Redux Hook</NavLink> 
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Axios</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" exact to="/ajaxrcc">Ajax React Class</NavLink>
                                    <NavLink className="dropdown-item" exact to="/ajaxrfc">Ajax React Function</NavLink>
                                    <NavLink className="dropdown-item" exact to="/apimiddleware">Api middle ware</NavLink>
                                    
                                </div>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
  )
}
