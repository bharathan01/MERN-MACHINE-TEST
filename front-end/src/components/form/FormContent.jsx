import React from "react";
import "./form.css";

function FormContent() {
  return (
    <div class="form-container">
      <h2>Create Employee</h2>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="textbox" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="textbox" />
        </div>
        <div class="form-group">
          <label for="mobile">Mobile No:</label>
          <input type="tel" id="mobile" name="mobile" placeholder="textbox" />
        </div>
        <div class="form-group">
          <label for="designation">Designation:</label>
          <select id="designation" name="designation">
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="radio">
          <label>Gender:</label>
          <div class="radio-group">
            <label>
              <input type="radio" name="gender" value="M" /> M
            </label>
            <label>
              <input type="radio" name="gender" value="F" /> F
            </label>
          </div>
        </div>
        <div className="radio">
          <label>Course:</label>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" name="course" value="MCA" /> MCA
            </label>
            <label>
              <input type="checkbox" name="course" value="BCA" /> BCA
            </label>
            <label>
              <input type="checkbox" name="course" value="BSC" /> BSC
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="img-upload">Img Upload:</label>
          <input
            type="file"
            id="img-upload"
            name="img-upload"
            class="file-input"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContent;
