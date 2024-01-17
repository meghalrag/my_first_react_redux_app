import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const add = () => {
    dispatch(actions.addBy(10))
  }
  return (
    <div>
      <h1>Counter App</h1>
      <b>counter value: {counter}</b>
      <br></br>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
