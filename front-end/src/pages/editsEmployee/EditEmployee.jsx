import React, { useEffect, useState } from 'react'
import FormContent from '../../components/form/FormContent';
import EditFormContent from '../../components/editForm/EditFormContent';
import { useParams } from 'react-router-dom';
import { singleEmployeDetails } from '../../service/connectServer';

function EditEmployee() {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null)
  useEffect(()=>{
    async function fetchEmpDetails(){
       const responce = await singleEmployeDetails(id)
       setEmployeeData(responce.singleEmpData)
     }
     fetchEmpDetails()
  },[id])
  return (
    <div>
      <EditFormContent empData={employeeData}/>
    </div>
  )
}

export default EditEmployee;