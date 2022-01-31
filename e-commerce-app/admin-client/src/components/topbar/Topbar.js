import { Avatar } from "@material-ui/core";
import {
  Settings,
  Language,
  NotificationsIcon,
  NotificationsNone,
} from "@material-ui/icons";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">JAOUAD </span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge"> 2 </span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge"> 2 </span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div>
            <Avatar
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="user"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
