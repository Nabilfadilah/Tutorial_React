import React from "react";
import FormLogin from "../fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your details
        </p>
        {/* form input */}
        {children}

        {/* conditional rendering */}
        {/* <Navigation type={type} /> */}
        <p className="text-sm mt-3 text-center">
          {type === "login"
            ? "Anda belum memiliki akun? "
            : "Sudah memiliki akun? "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

// conditional rendering menggunakan If else
// const Navigation = ({ type }) => {
//   if (type === "login") {
//     return (
//       <p className="text-sm mt-3 text-center">
//         Anda belum memiliki akun? {""}
//         <Link to="/register" className="font-bold text-blue-600">
//           Register
//         </Link>
//       </p>
//     );
//   } else {
//     return (
//       <p className="text-sm mt-3 text-center">
//         Sudah memiliki akun? {""}
//         <Link to="/login" className="font-bold text-blue-600">
//           Login
//         </Link>
//       </p>
//     );
//   }
// };

export default AuthLayouts;
