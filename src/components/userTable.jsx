import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addUser, updateUser, deleteUser } from "../store/slice";
import Button from "./common/Button";
import AddUser from "./addUser";
import TextContent from "./common/Text";
import EditUsers from "./EditUser";
import LoadingSpinner from "./common/loader";

const UserTableComponent = () => {

  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.crud);
  console.log({ users, loading, error });
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);

  console.log({ newUser });

  console.log({ editingUser });


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      dispatch(addUser(newUser));
      setNewUser({ name: "", email: "" });
    }
  };

  const handleUpdateUser = () => {
    if (editingUser && editingUser.name && editingUser.email) {
      dispatch(updateUser(editingUser));
      setEditingUser(null);
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-10 py-2">
      <div className="py-5">
        <TextContent text="User List Data" />
      </div>
      <table border="" className="table  shadow-lg border rounded-md  w-full">
        <thead className="table-header-group ">
          <tr className="border  bg-gray-100 ">
            <th className="py-4">Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="border ">
          {users.map((user) => (
            <tr key={user.id} onClick={() => setEditingUser(user)}  className="border py-2 transition-all duration-75 cursor-pointer hover:font-bold bg-gray-50">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="flex justify-center gap-2">
                <Button
                  className={"text-white bg-orange-500"}
                  text="Edit"
                  type="edit"
                  onClick={() => setEditingUser(user)}
                />
                <Button
                  onClick={() => handleDeleteUser(user.id)}
                  text="Delete"
                  type="ll"
                  className={"text-white bg-red-500"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-10">
        <AddUser
          newUser={newUser}
          handleAddUser={handleAddUser}
          setNewUser={setNewUser}
        />
      </div>

      <EditUsers
        editingUser={editingUser}
        handleUpdateUser={handleUpdateUser}
        setEditingUser={setEditingUser}
      />
    </div>
  );
};

export default UserTableComponent;
