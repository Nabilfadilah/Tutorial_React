import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  // ini mengambil dari semua props di input dan label
  const { label, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
