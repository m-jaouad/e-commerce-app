import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import dummyData from "../../dummyData";

import "./home.css";

const Home = (props) => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={dummyData}
        title="User Analytics"
        grid
        dataKey="Active user"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
