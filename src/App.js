import './App.scss';
import { Button } from './components'

function App () {
  return (
    <div className="App">
      <Button type='link' href='www.baidu.com'>Hello</Button>
      <Button type='primary'>Hello</Button>
    </div>
  );
}

export default App;
