import React, { useState } from "react";
import FormContent from "../../components/form/FormContent.jsx";
import Banner from "../../components/banner/Banners.jsx";
import { createEmp } from "../../service/connectServer/index.js";
import { useNavigate } from "react-router-dom";

function CreateEmp() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleFormSubmition = async (formData) => {
    const result = await createEmp(formData);
    if (result?.status === "FAILD") setError(result?.message?.errors);
    if (result?.status === "SUCCESS") {
      alert("employee created successfully");
      navigate("/all-Details");
    }
  };
  return (
    <div>
      <Banner content={"Create Employee"} />
      <FormContent onSubmit={handleFormSubmition} errors={error} />
    </div>
  );
}

export default CreateEmp;
