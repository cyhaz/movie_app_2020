import React from 'react';
import PropTypes from 'prop-types';
  
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("컴포넌트 시작!");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState({count: this.state.count - 1});
  };
  componentDidMount() {
    console.log("컴포넌트가 렌더링되었습니다.");
  }
  componentDidUpdate() {
    console.log("컴포넌트가 업데이트되었습니다.");
  }
  componentWillUnmount() {
    console.log("컴포넌트가 죽었습니다.");
  }
  // setState() 실행 시 자동으로 render()도 실행 (render refresh!)
  render() {
    console.log("rendering...");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
