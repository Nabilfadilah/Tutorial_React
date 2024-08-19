import { useState, useEffect } from "react";
import { getUsername } from "../services/Auth.services";

// custom hook, untuk membatas akses route ketika belum login
export const useLogin = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // tangkap tokennya!
    const token = localStorage.getItem("token");
    if (token) {
      setUserName(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return userName;
};
