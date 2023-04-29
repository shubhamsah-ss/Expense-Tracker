import { sidebarList } from './config/constant'
import SidebarComponent from "./components/Sidebar";
import Expenses from "./pages/Expenses";
import AddExpense from './pages/Expenses/AddExpense';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="flexbox">
      
      <SidebarComponent sidebarList={sidebarList} />
      <div className="layout-container">
      <Routes>
          <Route path={"/"} element={<Expenses />} />
       
          <Route path={"/:operation"} element={<AddExpense />}/>

          <Route path={"/:operation/:id"} element={<AddExpense />} />
            
          <Route path={"/analytics"} element={"Analytics Page!"} />
          
          <Route path={"*"} element={"Invalid URL"} />            
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
