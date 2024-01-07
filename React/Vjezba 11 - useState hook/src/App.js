import { useState } from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './user';

function App() {

  const [users, setUsers] = useState([
    { name: 'Ivan', years: 30 },
    { name: 'Marko', years: 25 },
    { name: 'Ana', years: 25 }
  ]);

  const [childrenText, setChildrenText] = useState("A hobi mi je plivanje");

  // constructor(){
  //   super();

  //   this.state = {
  //     users: [
  //       { name: 'Ivan', years: 30 },
  //       { name: 'Marko', years: 25 },
  //       { name: 'Ana', years: 25 }
  //     ],
  //     childrenText: "A hobi mi je plivanje"
  //   };

  // }

  const btnClickHandler = (event) => {
    console.log(event);
    const newUsers = users.map((user) => {
      return {...user, years: user.years + 1}
    });
    setUsers(newUsers);
  }

 


    //const { users, childrenText } = this.state;

  return (
    <div className="App">
      <h1>React aplikacija</h1>
      <p>Ovo zaista radi</p>
      <UserFunction ime={users[0].name} years={users[0].years} />
      <UserClass name={users[1].name} years={users[1].years} />
      <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
      <button onClick={btnClickHandler}>Promjena godina</button>
    </div>
  );

}

export default App;