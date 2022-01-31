import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userData } from "../../dummyData";
import { useState } from "react";

import "./userList.css";

const UserList = (props) => {
  const [data, setData] = useState(userData);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((userInfo) => userInfo.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListInfo">
            <img src={params.row.avatar} alt="" className="productListImg" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction volume",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/user/" + params.row.id}>
              <button className="userEditButton">Edit</button>
            </Link>
            <DeleteOutline
              className="userDeleteIcon"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
