// import logo from './logo.svg';
import './App.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
const App = (props) => {
  return (
    <>
      <h1>Vũ Minh Quân</h1>
      <MyComponent></MyComponent>
    </>
  )
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Vũ Minh Quân with HP
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
