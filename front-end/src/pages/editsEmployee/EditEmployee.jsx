import React, { useEffect, useState } from "react";
import FormContent from "../../components/form/FormContent";
import EditFormContent from "../../components/editForm/EditFormContent";
import { useNavigate, useParams } from "react-router-dom";
import {
  editEmpDetails,
  singleEmployeDetails,
} from "../../service/connectServer";

function EditEmployee() {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchEmpDetails() {
      const responce = await singleEmployeDetails(id);
      setEmployeeData(responce.singleEmpData);
    }
    fetchEmpDetails();
  }, [id]);
  const handleEditDetails = async (formData) => {
    const responce = await editEmpDetails(formData, id);
    if (responce.status === "SUCCESS") {
      if (confirm("employee details updated need to exit") == true)
        navigate("/all-Details");
    }
    setError(responce?.message?.errors)
  };
  return (
    <div>
      <EditFormContent
        empData={employeeData}
        onSubmit={handleEditDetails}
        errors={error}
      />
    </div>
  );
}

export default EditEmployee;
