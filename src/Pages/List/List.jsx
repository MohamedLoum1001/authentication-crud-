import React from 'react'
import "./List.scss"
import Sidebar from "../../Components/Sidebar/Sidebar"
import NavBar from "../../Components/NavBar/NavBar"
import Datatable from "../../Components/Datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavBar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List
