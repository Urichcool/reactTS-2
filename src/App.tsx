import axios from "axios";
import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import { IUser, ITodo } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }

    const fetchTodos = async () => {
      try {
        const response = await axios.get<ITodo[]>(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        setTodos(response.data);
      } catch (error) {
        alert(error);
      }
    };

  return (
    <>
      <div>It Work's!!</div>
      <EventsExample/>
      <Card
        onClick={(num) => {
          console.log("Hi", num);
        }}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </>
  );
};

export default App;
