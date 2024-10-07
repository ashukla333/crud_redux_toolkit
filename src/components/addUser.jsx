import React from "react";
import TextContent from "./common/Text";
import Button from "./common/Button";

const AddUser = ({ newUser, setNewUser, handleAddUser }) => {
  return (
    <div className="border rounded-sm  shadow-lg p-10 bg-gray-50">
      <div className="flex gap-5 flex-col">
        <TextContent text="Add User" />
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-black bg-gray-100  text-black font-bold p-2"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-black bg-gray-100  text-black font-bold p-2"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <Button type="Add" onClick={handleAddUser} className={"bg-green-600"} text="Add New User" />
      </div>
    </div>
  );
};

export default AddUser;
