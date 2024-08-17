import React from "react";
import AuthLayouts from "../components/layouts/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <AuthLayouts title="Login">
        <FormLogin />
        <p className="text-sm mt-3 text-center">
          Anda belum memiliki akun?{" "}
          <Link to="/register" className="font-bold text-blue-600">
            {" "}
            Sign Up
          </Link>
        </p>
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
