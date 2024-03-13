import React from 'react'
import style from "./link.module.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section id={style.nav}>
        <Link to="/" >CREATE-USER</Link>
        <Link to= "/users">USERS</Link>
    </section>
  )
}

export default Login
