import React from 'react';
import './App.css';
import ColorPicker from 'react-color-picker'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={ color: 'red'}
  }

  onDrag(color, c) {
    this.setState({color})
  }

  render() {
    return <div>
      <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)} />
      <div style={{
        background: this.state.color,
        width: 100,
        height: 50,
        color: 'white'
      }}>
        {this.state.color}
        </div>
    </div>
  }
}

export default App;
