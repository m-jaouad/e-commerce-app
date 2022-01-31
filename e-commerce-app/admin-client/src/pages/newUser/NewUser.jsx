import "./newUser.css";

const NewUser = (props) => {
  return (
    <div className="newUser">
      <h3 className="newUserTitle">New User</h3>
      <form className="newUserForm">
        <div className="newUserFormItems">
          <div className="newUserItem">
            <label>userName</label>
            <input type="text" placeholder="John" />
          </div>
          <div className="newUserItem">
            <label>FullName</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="newUserItem">
            <label>Adderss</label>
            <input type="text" placeholder="New York |Usa" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="06 123 456" />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" id="male" value="male" name="gender" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" value="female" name="gender" />
              <label htmlFor="female">Female</label>
              <input type="radio" id="other" value="other" name="gender" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" id="active" name="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="newUserButton">
          <button type="button" className="newUserButtonForm">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
