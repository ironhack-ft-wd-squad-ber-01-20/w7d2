import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    buttonText: "Like"
  };

  toggleLike = () => {
    if (this.state.buttonText === "Like") {
      // we want to set buttonText to 'Unlike' if it was 'Like'
      this.setState({
        buttonText: "Unlike"
      });
    } else if (this.state.buttonText === "Unlike") {
      // we want to set buttonText to 'Like' if it was 'Unlike'
      this.setState({
        buttonText: "Like"
      });
    }
  };

  render() {
    console.log("Render");
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello World! (class)</h1>
        <button onClick={this.toggleLike}>{this.state.buttonText}</button>
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };
  // }

  state = {
    count: 0
  };

  handleClick = () => {
    // this.state.count++; ❌
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <p>Count of clicks: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

export default App;
