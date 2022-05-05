import "./sidebar.scss";
import React from 'react'


export const Sidebar = () => {
  return (
<div className="sidebar">
    <div className="top"> 
    <span className="logo"> ParkNB</span>
    </div>
    <div className="middle">
        <li>
            <span>Dashboard</span>
        </li>
        <li>
            <span>Dashboard</span>
        </li>
        <li>
            <span>Dashboard</span>
        </li>
        <li>
            <span>Dashboard</span>
        </li>
    </div>
    <div className="center">Faqs and Policies</div>
    <div className="bottom"> Logout</div>
</div>

  )
}
