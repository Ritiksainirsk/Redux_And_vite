import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import fakeUserData from "../api";
import { addUser, deleteUser, removeUser } from "../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

export default function UserDetails() {

  const [isEmpty , setIsEmpty] = useState(false)

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users);

  const addData = (name) => {
    dispatch(addUser(name));
    setIsEmpty(true)
  };

  const deleteSingleUser = (id) => {
    dispatch(removeUser(id));
  };

  const deleteAllUser = () => {
    dispatch(deleteUser());
    setIsEmpty(false)
  };

  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-sutitle">List of user Details</div>
        <button className="add-user" onClick={() => addData(fakeUserData())}>
          Add new user
        </button>
        <button
          className="delete-user"
          onClick={() => {
            deleteAllUser();
          }}
        >
          {" "}
          DeteleAllUser
        </button>
      </div>
      {isEmpty ? (
        <ul>
          {userData.map((name, id) => {
            return (
              <li key={id}>
                {name}{" "}
                <AiFillDelete
                  onClick={() => {
                    deleteSingleUser(id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      ): <div style={{fontSize:"150px", marginTop:"100px"}}>😆 </div> }
    </div>
  );
}
