import ButtonAll from "../elements/button";
import InputForm from "../elements/input/Index";

const FormLogin = () => {
  // event handler
  const handleLogin = (event) => {
    event.preventDefault();
    // cara menyimpan ke localstorage
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    window.location.href = "/products";
    console.log("login");
  };

  return (
    <form onSubmit={handleLogin}>
      {/* email */}
      <InputForm
        label="Email:"
        type="email"
        placeholder="example@gmail.com"
        name="email"
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
      {/* <ButtonAll className="bg-yellow-500 w-full" onClick={handleLogin}>
        Login
      </ButtonAll> */}
    </form>
  );
};

export default FormLogin;
