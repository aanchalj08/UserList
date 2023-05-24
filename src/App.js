import React,{useState} from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from './components/Users/UserList'

function App() {
const [user,setUser]=useState([]);

const addUserHandler=(uName,uAge)=>{
  setUser((prevState)=>{
    return [
      ...prevState,
      {name:uName,age:uAge,id:Math.random().toString},
    ];

  });
};

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList items={user}></UserList>
    </div>
  );
}

export default App;
