import React from "react";
import ButtonAll from "./components/elements/button";

// component untuk mendeklarasikan button
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//         component
//       </button>
//     );
//   }
// }

// funtional component, tinggal mendefinisikan fungtionnya
// function ButtonBlack() {
//   return (
//     <button className="bg-gray-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full">
//       functional component
//     </button>
//   );
// }

// opsi ke-2 arrow function component
// const ButtonRed = () => {
//   return (
//     <button className="bg-red-900 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
//       Arrow funtions
//     </button>
//   );
// };

// agar 1 funtion component lebih simpel dan bisa ganti2 warna
// menggunakan (Props) / properties
// didefinsikan sebagai sebuah varameter funtion
// const ButtonAll = (props) => {
//   // konsep desctrukturing
//   // const { children, variant = "bg-black" } = props;
//   return (
//     <button
//       className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-black`}
//       // konsep desctrukturing
//       // className={`h-10 px-6 font-semibold rounded-md ${variant} text-black`}
//       type="submit"
//     >
//       {props.text}

//       {/* konsep desctrukturing */}
//       {/* {children} */}

//       {/* props spesial yaitu (children) */}
//       {/* sebuah komponen yang bisa menangkap apa yang ada di dalam tag componen tersbut */}
//       {props.children}
//     </button>
//   );
// };

function App() {
  return (
    <>
      {/* cara membuat component dalam react, seperti Button ini */}
      <div className="flex justify-center min-h-screen items-center">
        <div className="flex gap-x-3">
          {/* <Button></Button> */}
          <h1 className="bg-gray-200 rounded-b-lg p-5 text-cyan-700">
            Hallo Semuanya
          </h1>
          <ButtonAll>Beda component</ButtonAll>
          {/* <Button /> */}

          {/* <ButtonBlack /> */}

          {/* <ButtonRed /> */}

          {/* props */}
          {/* <ButtonAll variant="bg-red-700" text="Props"></ButtonAll>
          <ButtonAll variant="bg-slate-500" text="Login"></ButtonAll> */}

          {/* props (children) */}
          {/* <ButtonAll variant="bg-yellow-700">Logout</ButtonAll>
          <ButtonAll variant="bg-green-500">Profil</ButtonAll> */}

          {/* konsep desctrukturing */}
          {/* <ButtonAll></ButtonAll> */}
        </div>

        {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button Now
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button Now
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button Now
        </button> */}
      </div>
    </>
  );
}

export default App;
