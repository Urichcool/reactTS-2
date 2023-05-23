import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>()
  
  const navigate = useNavigate();

      useEffect(() => {
        fetchUser();
      }, []);

      const fetchUser = async () => {
        try {
          const response = await axios.get<IUser>(
            "https://jsonplaceholder.typicode.com/users/" + params.id
          );
          setUser(response.data);
        } catch (error) {
          alert(error);
        }
      };
    return (
      <>
        <button onClick={() => {
          navigate('/users')
        }}>Back</button>
        <h1>User Page {user?.name}</h1>
        <div>{user?.email}</div>

      </> 
    )
}

export default UserItemPage