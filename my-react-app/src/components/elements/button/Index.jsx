// agar 1 funtion component lebih simpel dan bisa ganti2 warna
// menggunakan (Props) / properties
// didefinsikan sebagai sebuah varameter funtion
const ButtonAll = (props) => {
  // konsep desctrukturing
  const { children, variant = "bg-black" } = props;
  return (
    <button
      // className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-black`}
      // konsep desctrukturing
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {/* {props.text} */}

      {/* konsep desctrukturing */}
      {children}

      {/* props spesial yaitu (children) */}
      {/* sebuah komponen yang bisa menangkap apa yang ada di dalam tag componen tersbut */}
      {/* {props.children} */}
    </button>
  );
};

export default ButtonAll;
