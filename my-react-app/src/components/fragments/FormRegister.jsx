import ButtonAll from "../elements/button";
import InputForm from "../elements/input/Index";

const FormRegister = () => {
  return (
    <form action="">
      {/* fullname */}
      <InputForm
        label="Fullname:"
        type="text"
        placeholder="insert your name here..."
        name="fullname"
      />

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

      {/* confirm password */}
      <InputForm
        label="Confirm Password:"
        type="password"
        placeholder="*****"
        name="confirmPassword"
      />
      <ButtonAll className="bg-green-500 w-full">Register</ButtonAll>
    </form>
  );
};

export default FormRegister;
