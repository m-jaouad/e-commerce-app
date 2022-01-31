import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { productsData } from "../../dummyData";
import { useState } from "react";

import "./productList.css";

const ProductList = (props) => {
  const [data, setData] = useState(productsData);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListInfo">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Srock", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
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

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((userInfo) => userInfo.id !== id));
  };
  return (
    <div className="productList">
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

export default ProductList;
