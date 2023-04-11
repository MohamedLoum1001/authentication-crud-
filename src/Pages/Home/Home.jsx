import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import "./Home.scss";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";

const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <NavBar />
      <div className="widgets">
        <Widget type="user" />
        <Widget type="product" />
        <Widget type="order" />
        <Widget type="earning" />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div>
    </div>
  </div>
);
};

export default Home;