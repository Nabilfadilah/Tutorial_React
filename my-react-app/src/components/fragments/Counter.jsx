import React from "react";

class Counter extends React.Component {
  // definisikan state
  constructor(props) {
    super(props);
    // state namanya count
    this.state = {
      count: 0,
    };
    console.log("construktor");
  }

  // component didmoun
  // diawal
  componentDidMount() {
    this.setState({ count: 1 });
    console.log("componentDidMount");
  }

  // componet didupdate
  // akan melihat setiap perubahan yang terjadi
  // bisa props, state, atau force
  componentDidUpdate(prevProps, prevState) {
    console.log("componenDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
