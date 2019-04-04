import React, {Component} from 'react'
import {render} from 'react-dom'
import Operator from '../operator';
const { by, operator, operators } = Operator;
const { debounceTime } = operators;

const arr = ['harry','potter','jarry','tom']

class Demo extends by(Component) {
  state = {
    value: '',
    result: [],
  }

  componentDidMount() {
    this.onSearch();
  }

  @operator(debounceTime(1000))
  onSearch() {
    const result = [];
    arr.forEach(e=>{
      e.indexOf(this.state.value) !== -1 && result.push(e);
    });
    this.setState({ result });
  }

  render() {
    return <div>
      <h1>动态查询</h1>
      <input value={this.state.value} onChange={(e)=>{ this.setState({ value: e.target.value });this.onSearch() }}/>
      <ul>
        {this.state.result.map(e=><li key={e}>{e}</li>)}
      </ul>
      {this.state.result.length == 0 && <div>没有找到任何数据</div>}
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
