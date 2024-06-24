const BASE_URL = "http://localhost:8000/api";

export const logInUser = async (userCredentials) => {
  try {
    const isUserLogIn = await fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
      credentials: "include",
    });

    const userData = await isUserLogIn.json();
    if (userData?.message?.error) return userData?.message;
    if (userData?.userData) {
      localStorage.setItem("username", userData.userData.f_username);
      return { success: true };
    }
  } catch (error) {
    return error;
  }
};

export const createEmp = async (formData) => {
  try {
    const createData = await fetch(BASE_URL + "/employee/create-employe", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    const result = await createData.json();
    return result;   
  } catch (error) {
    console.log(error);
  }   
};

export const employeDetails = async() =>{
   try {
     const empData = await fetch(BASE_URL + "/employee/getempdetails",{
        method: "GET",
        credentials: "include",
      });
      const employeDetails = await empData.json()
      console.log(employeDetails)
      return employeDetails;
   } catch (error) {
    console.log(error)
   }
}
