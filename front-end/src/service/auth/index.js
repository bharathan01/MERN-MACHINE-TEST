const BASE_URL = "http://localhost:8000/api";

export const logInUser = async (userCredentials) => {
  try {
    const isUserLogIn = await fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
      credentials: 'include'
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
