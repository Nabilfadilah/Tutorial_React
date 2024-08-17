import React from "react";
import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayouts title="Register">
        {/* children */}
        <FormRegister />
        <p className="text-sm mt-3 text-center">
          Sudah memiliki akun?{" "}
          {/* client side routing, tidak memanggil dulu ke server dokumen page nya*/}
          <Link to="/login" className="font-bold text-blue-600">
            {" "}
            Login
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
