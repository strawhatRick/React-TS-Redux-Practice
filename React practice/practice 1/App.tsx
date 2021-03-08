import React from 'react';

type State = {
  count: number;
}

type Props = {
  yourName?: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    count: 0
  }
  handleMinus = () => {
    this.setState({count: this.state.count - 1})
  }
  handlePlus = () => {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <>
        <h1>Hi! I'm {this.props.yourName}</h1>
        <button onClick={this.handleMinus}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handlePlus}>+</button>
      </>
    )
  }
}
export default App;
