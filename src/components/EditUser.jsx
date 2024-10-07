import React from "react";
import Button from "./common/Button";
import TextContent from "./common/Text";

const EditUsers = ({ editingUser, setEditingUser, handleUpdateUser }) => {
  return (
    editingUser && (
      <div className="border rounded-sm  shadow-lg p-10 bg-gray-50">
        {editingUser && (
          <div className="flex gap-5 flex-col">
            <TextContent text="Edit User" />
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-black bg-gray-100  text-black font-bold p-2"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-black bg-gray-100  text-black font-bold p-2"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
            />
            <Button
              onClick={handleUpdateUser}
              type="edit"
              className={"bg-orange-800"}
              text="Update"
            />
          </div>
        )}
      </div>
    )
  );
};

export default EditUsers;
