import { NavLink } from "react-router-dom"

function SidebarListItem({item}) {
 
  return (
    <li>
      <NavLink to={item.path} exact="true" >
        <span className="material-icons">{item.icon}</span>
        <span>{item.name}</span>
      </NavLink>
    </li>
  )
}

export default SidebarListItem