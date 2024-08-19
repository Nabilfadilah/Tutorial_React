import { useEffect, useRef, useState } from "react";
import ButtonAll from "../elements/button";
import InputForm from "../elements/input/Index";
import { login } from "../../services/Auth.services";

const FormLogin = () => {
  // error console
  const [loginFailed, setLoginFailed] = useState("");
  // event handler
  const handleLogin = (event) => {
    event.preventDefault();
    // cara menyimpan ke localstorage
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // window.location.href = "/products";
    // console.log("login");
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        // console.log(res);
      }
    });
  };

  // useRef untuk input login
  const usernameRef = useRef(null);

  // agar form login lagung diarahkan ke email
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {/* email */}
      <InputForm
        label="Username:"
        type="text"
        placeholder="Jhon doe"
        name="username"
        ref={usernameRef}
      ></InputForm>

      {/* password */}
      <InputForm
        label="Password:"
        type="password"
        placeholder="*****"
        name="password"
      />
      {/* dikirimkan sebagai props ke button */}
      <ButtonAll className="bg-yellow-500 w-full" type="submit">
        Login
      </ButtonAll>
      {loginFailed && (
        <p className="text-red-500 text-center pt-2">{loginFailed}</p>
      )}

      {/* <ButtonAll className="bg-yellow-500 w-full" onClick={handleLogin}>
        Login
      </ButtonAll> */}
    </form>
  );
};

export default FormLogin;
