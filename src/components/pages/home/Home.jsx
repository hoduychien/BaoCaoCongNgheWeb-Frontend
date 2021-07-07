import Featuredinfo from "../../featuredinfo/Featuredinfo.jsx";
import Chart from "../../chart/Chart.jsx";
import "./Home.css";
import { userData } from "../../../dummyData";


const Home = () => {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
            </div>
        </div>
        
    );
}

export default Home;
