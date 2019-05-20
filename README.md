# gperator
```javascript
//Demo, 期待为onClick添加防抖动的能力。
class Demo extends Component {
  onClick(e) {
    console.log('我被点击了');
  }

  render() {
    return <button onClick={this.onClick.bind(this)}>点击</button>
  }
}
```

```javascript
import Operator from '@alipay/operator';
const { by, operator } = Operator;
/**
 * 找到对应的 rxjs operators
 * 所有的 rxjs operators 都是纯函数。
 */ 
import { debounceTime } from 'rxjs/operators';

class Demo extends by(Component) {
  /**
   * 因为所有的operators都是存函数，
   * 所以只需要找到操作符后直接在装饰器中调用即可。
   * 可以参照 rxjs 对应 operators Example 中的 pipe部分。
   */
  @operator(debounceTime(1000))
  onClick(e) {
    console.log('我被点击了');
  }

  render() {
    return <button onClick={this.onClick.bind(this)}>点击</button>
  }
}
```
