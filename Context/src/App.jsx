import { useContext } from 'react'
import './App.css';
import { AppContext } from './component/AppContext/AppContextProvider';
import Button from './component/Button/Button';
import Counter from './component/Counter/Counter'
function App() {

  const [theme, toggleTheme ] = useContext(AppContext);

  return (
    <div className="App">
    "hello app"
    <Button text="THEME"></Button>
    <br/>
    <button onClick={toggleTheme}>Toggle</button>
      <Counter></Counter>
    </div>
  );
}

export default App
