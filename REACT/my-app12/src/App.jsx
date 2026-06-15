// function App(){
//   return (
//     <div className="App">
//       <h1>Hello World!!</h1>
//       <p>This is my first React app.</p>
//       <Cse12/>
//     </div>
//   );
// }
// //2nd Component
// function Cse12(){
//   return (
//     <div className="Cse12">
//       <h2>Welcome to CSE12</h2>
//       <p>This is the second component</p>
//     </div>
//   );
// }
// export default App;

import Student from "./Student";

function App(){
  return (
    <div className="App">
      <h1>Student Information</h1>
      <Student name="Alice" course="CSE12" marks={85}/>
      <Student name="Bob" course="CSE12" marks={90}/>
      <Student name="Charlie" course="CSE12" marks={78}/>
    </div>
  );
}
export default App;