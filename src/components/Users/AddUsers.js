import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function AddUsers(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorState,setErrorState]=useState();

  const nameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setErrorState({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty value).'
      });
      return;
    }

    if(enteredAge<1){
      setErrorState({
        title:'Invalid age',
        message:'Please enter a valid age (>0).'
      });
      return;

    }
    
    props.onAddUser(enteredUsername,enteredAge);

    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorStateChange=()=>{
    setErrorState(null);

  };

  return (
    <div>
    {errorState && <ErrorModal title={errorState.title} message={errorState.message} onErrorClickHandler={errorStateChange}></ErrorModal>};
    <Card className={styles.formControl}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={nameChangeHandler}
          value={enteredUsername}
        ></input>
        <label htmlFor="age">Age(In Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <Button type="sumbit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}

export default AddUsers;
