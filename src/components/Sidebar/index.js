import SidebarListItem from "./SidebarListItem";

function SidebarComponent({sidebarList}) {
  

  const SidebarListItems = sidebarList.map((item, index) =>
    (<SidebarListItem key={index} item={item} />))

  return (
    <div className="sidebar-container">
        <div className="flexbox flexbox-justify-between sidebar-container__brand">
        <h2>Expense Tracker</h2>
        {/* <span className="material-icons" id="close">close</span> */}
      </div>
      <div className="sidebar-container__list">
        <ul>
          {SidebarListItems}
        </ul>
      </div>
    </div>
  )
}
export default SidebarComponent