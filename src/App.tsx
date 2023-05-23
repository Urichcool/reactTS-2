import { Routes, Route,NavLink } from "react-router-dom";
import TodosPage from "./components/TodosPages";
import UsersPage from "./components/UserPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <>
      <div>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/todos"}>ToDo</NavLink>
      </div>
      <Routes>
        <Route path={"/users"} element={<UsersPage />} />
        <Route path={"/todos"} element={<TodosPage />} />
        <Route path={"/users/:id"} element={<UserItemPage />} />
        <Route path={"/todos/:id"} element={<TodoItemPage />} />
      </Routes>
    </>
  );
};

export default App;
