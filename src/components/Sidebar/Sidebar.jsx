import './Sidebar.css'
import { Link } from "react-router-dom";
import {LineStyle ,Timeline,ChatBubbleOutline,TrendingUp,DynamicFeed,Storefront,Mail,PersonOutline,AttachMoney,PeopleAlt} from "@material-ui/icons"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>Home
                            </li> 
                        </Link>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>Sales
                        </li>             
                    </ul>  
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Manage</h3>
                    <ul className="sidebarList">
                        <Link to="/products"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>Products
                            </li> 
                        </Link>    
                        <Link to="/customers"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon"/>Customers
                            </li>
                        </Link>
                        <Link to="/bills"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>Bills
                            </li>
                        </Link>    
                        <Link to="/staffs"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <li className="sidebarListItem">
                            <PeopleAlt className="sidebarIcon"/>Employee
                            </li>           
                        </Link>  
                    </ul>  
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifycations</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Mail className="sidebarIcon"/>Mail
                        </li> 
                        <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon"/>FeedBack
                        </li>
                        <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/>Messages
                        </li>             
                    </ul>  
                </div>
            </div>
        </div>
        
    );
}

export default Sidebar;
