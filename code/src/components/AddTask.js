import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "../reducers/tasks";

const AddTask = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input));
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="add new to do!"
      />
      <Button onClick={onAddTask}>
        <i className="fas fa-plus-circle fa-lg"></i>
      </Button>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: 2px dotted #2f8c85;
  padding: 5% 10%;
`;

const Button = styled.button`
  border: none;
  background-color: #d7f0ed;
  color: #2f8c85;
  font-size: 25px;

  &:hover {
    color: #d7f0ed;
    background-color: #2f8c85;
  }

  &:active {
    background-color: #2f8c85;
    transition: 0.5s;
    color: #d7f0ed;
  }
`;

export default AddTask;
