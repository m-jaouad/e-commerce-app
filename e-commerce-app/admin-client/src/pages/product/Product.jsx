import { Publish } from "@material-ui/icons";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Link } from "react-router-dom";

import "./product.css";

const Product = (props) => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/products/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales Perfermonce" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://media.istockphoto.com/photos/apple-airpods-wireless-bluetooth-headphones-and-charging-case-for-picture-id1163793113?k=20&m=1163793113&s=612x612&w=0&h=o0_-bX0Tu9_rI7h-84Q44qLOvBR8uNZ8fvmfTK-SLvc="
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoVAlue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoVAlue">5300</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoVAlue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoVAlue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label> Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://media.istockphoto.com/photos/apple-airpods-wireless-bluetooth-headphones-and-charging-case-for-picture-id1163793113?k=20&m=1163793113&s=612x612&w=0&h=o0_-bX0Tu9_rI7h-84Q44qLOvBR8uNZ8fvmfTK-SLvc="
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish className="productUploadIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <div className="divButtonUpdate">
              <button type="button" className="productUpdateButton">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
