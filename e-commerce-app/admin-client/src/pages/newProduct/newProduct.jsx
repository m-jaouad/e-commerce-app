import { Publish } from "@material-ui/icons";
import "./newProduct.css";

const NewProduct = (props) => {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem ">
          <label>Image</label>
          <label htmlFor="file" className="iconUpload">
            <Publish /> Click Here to choose an image
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <div className="addProductItem">
          <label> Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label> Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label> Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
