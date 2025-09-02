import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UserDetails from './UserDetails'


const UserList = () => {
  return (
    <div>
        <h1>User List</h1>
       <ul>
         <li><Link to="users/1">Leanne Graham</Link></li>
        <li><Link to="users/2">Ervin Howell</Link></li>
        <li><Link to="users/3">Clementine Bauch</Link></li>
        <li><Link to="users/4">Patricia Lebsack</Link></li>
        <li><Link to="users/5">Chelsey Dietrich</Link></li>
        <li><Link to="users/6">Mrs. Dennis Schulist</Link></li>
        <li><Link to="users/7">Kurtis Weissnat</Link></li>
        <li><Link to="users/8">Nicholas Runolfsdottir V</Link></li>
        <li><Link to="users/9">Glenna Reichert</Link></li>
        <li><Link to="users/10">Clementina DuBuque</Link></li>
       </ul>




    </div>
  )
}

export default UserList