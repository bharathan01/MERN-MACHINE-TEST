import React, { useState } from "react";
import "./form.css";

function EditFormContent({ onSubmit, errors }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: [],
    imgUpload: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const newCourses = checked
          ? [...prevState.course, value]
          : prevState.course.filter((course) => course !== value);
        return {
          ...prevState,
          course: newCourses,
        };
      });
    } else if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        imgUpload: e.target.files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("name", formData.name);
    Data.append("email", formData.email);
    Data.append("imgUpload", formData.imgUpload);
    Data.append("gender", formData.gender);
    Data.append("designation", formData.designation);
    Data.append("course", formData.course);
    Data.append("mobile", formData.mobile);
    onSubmit(Data);
  };
  const getError = (field) => {
    if (errors) {
      const error = errors.find((error) => error.path === field);
      return error ? error.msg : null;
    }
    return null;
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Employee</h2>
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="textbox"
              onChange={handleInputChange}
            />
            {getError("name") && (
              <span className="error">{getError("name")}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="textbox"
              onChange={handleInputChange}
            />
            {getError("email") && (
              <span className="error">{getError("email")}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile No:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="textbox"
              onChange={handleInputChange}
            />
            {getError("mobail") && (
              <span className="error">{getError("mobail")}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <select
              id="designation"
              name="designation"
              onChange={handleInputChange}
            >
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
            {getError("designation") && (
              <span className="error">{getError("designation")}</span>
            )}
          </div>
          <div className="radio">
            <label className="radio-label">Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  onChange={handleInputChange}
                />{" "}
                M
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  onChange={handleInputChange}
                />{" "}
                F
              </label>
              {getError("gender") && (
                <span className="error">{getError("gender")}</span>
              )}
            </div>
          </div>
          <div className="radio">
            <label className="radio-label">Course:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  name="course"
                  value="MCA"
                  onChange={handleInputChange}
                />{" "}
                MCA
              </label>
              <label>
                <input
                  type="radio"
                  name="course"
                  value="BCA"
                  onChange={handleInputChange}
                />{" "}
                BCA
              </label>
              <label>
                <input
                  type="radio"
                  name="course"
                  value="BSC"
                  onChange={handleInputChange}
                />{" "}
                BSC
              </label>
              {getError("course") && (
                <span className="error">{getError("course")}</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="img-upload">Img Upload:</label>
            <input
              type="file"
              id="img-upload"
              name="imgUpload"
              className="file-input"
              onChange={handleInputChange}
              accept="image/*"
            />
            {getError("imgUpload") && (
              <span className="error">{getError("imgUpload")}</span>
            )}
          </div>
          <div className="form-group" style={{ justifyContent: "center" }}>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFormContent;
