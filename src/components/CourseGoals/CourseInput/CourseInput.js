import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 16px 0;
& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 24px;
  margin-bottom: 12px;
}

& .input-container input {
  font-size: 16px;
  width: 100%;
  height: 36px;
  padding: 12px;
  outline: none;
  border-radius: 8px;
  color: var(--super-silver);
  background: #141414;
  border: 1px solid #929292;
  box-shadow: 0 5px 25px -5px rgba(30,16,84,.1);
  transition: box-shadow .2s ease;
}

& .input-container input.error {
  background-color: var(--melanzane);
  border: 2px solid var(--kotle-brown);

}

.error-message{
  margin-top: 8px;
  font-size: 12px;
  color: var(--angry-flamingo);
}

`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!!enteredValue.trim().length) {
      setIsValid(true)
      props.onAddGoal(enteredValue);
    } else {
      setIsValid(false)
    }

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className="form-control">
        <label>Course Goal</label>
        <div className="input-container">
          <input type="text"
            className={isValid ? '' : 'error'}
            onChange={goalInputChangeHandler} />
          {!isValid &&
            <div className="error-message">
              This field is required.
            </div>
          }
        </div>
      </FormControl>
      <div className="actions-buttons">
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
