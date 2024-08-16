import ButtonAll from "../elements/button";
import InputForm from "../elements/input/Index";

const FormLogin = () => {
  return (
    <form action="">
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
      <ButtonAll className="bg-yellow-500 w-full">Login</ButtonAll>
    </form>
  );
};

export default FormLogin;
