import React from "react";
import { useLogin } from "../hooks/UseLogin";

const ProfilePage = () => {
  // agar ketika belum login tidak bisa akses halaman profil
  const userName = useLogin();

  return (
    <div>
      <h1>Profile</h1>
      Username: {userName}
    </div>
  );
};

export default ProfilePage;
