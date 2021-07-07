import Topbar from './components/topbar/Topbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './components/pages/home/Home.jsx';
import CustomerList from './components/pages/customerList/CustomerList.jsx';
import ProductList from './components/pages/productList/ProductList.jsx';
import BillList from './components/pages/billList/BillList.jsx';
import StaffList from './components/pages/staffList/StaffList.jsx';
import NotFound from "./components/pages/NotFound/NotFound.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Topbar/> 
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/bills">
            <BillList />
          </Route>
          <Route path="/staffs">
            <StaffList />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
