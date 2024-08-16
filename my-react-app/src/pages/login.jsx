import React from "react";
import AuthLayouts from "../components/layouts/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts title="Login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
