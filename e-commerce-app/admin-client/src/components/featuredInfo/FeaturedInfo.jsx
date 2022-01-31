import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import "./featuredInfo.css";

const FeaturedInfo = (props) => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$2.45</span>
          <span className="featuedMoneyRate">
            -2.17 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comperated to last month</span>
      </div>
      {/*  */}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$14.45</span>
          <span className="featuedMoneyRate">
            -11.17 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comperated to last month</span>
      </div>
      {/*  */}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$14.45</span>
          <span className="featuedMoneyRate">
            +12.17 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comperated to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
