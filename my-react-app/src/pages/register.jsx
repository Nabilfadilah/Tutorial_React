import React from "react";
import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/fragments/FormRegister";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register">
        {/* children */}
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
