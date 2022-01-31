import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

const WidgetSm = (props) => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmListItem">
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="widgetSmPhoto"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmUserName"> Anna Keller </span>
            <span className="widgetSmJob"> Software Enginner </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="widgetSmPhoto"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmUserName"> Anna Keller </span>
            <span className="widgetSmJob"> Software Enginner </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="widgetSmPhoto"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmUserName"> Anna Keller </span>
            <span className="widgetSmJob"> Software Enginner </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="widgetSmPhoto"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmUserName"> Anna Keller </span>
            <span className="widgetSmJob"> Software Enginner </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="widgetSmPhoto"
          />
          <div className="widgetSmInfo">
            <span className="widgetSmUserName"> Anna Keller </span>
            <span className="widgetSmJob"> Software Enginner </span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
