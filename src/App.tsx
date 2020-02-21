import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorfulMsg from './Components/ColorfulMsg';
import CountButton from './Components/CountButton';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const msgStyle = {
//   color: 'blue'
// };

const App = () => {
  return (
    <>
      <h2>React ハンズオン</h2>
      <ColorfulMsg color='blue'>React は難しいなー</ColorfulMsg>
      <ColorfulMsg color='red'>React は難しいなー</ColorfulMsg>
      <ColorfulMsg color='green'>React は難しいなー</ColorfulMsg>
      <CountButton />
    </>
  );
}

export default App;