import React, { useContext, useState } from "react";
import storeApi from "../../utils/storeApi";

export const InputCard = ({ setOpen, listId, type }) => {
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
    } else {
      addMoreList(title);
    }
    setOpen(false);
    setTitle("");
  };

  return (
    <div className="input-card bg-white rounded-md p-2 shadow-md mb-2">
      <div className="input-card-container">
        <textarea
          onChange={handleOnChange}
          value={title}
          className="input-text w-full p-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter list title"
          }
          autoFocus
        />
      </div>
      <div className="confirm flex justify-between">
        <button
          className="button-confirm bg-blue-500 text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleBtnConfirm}
        >
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <button
          className="button-cancel text-red-500 focus:outline-none"
          onClick={() => {
            setTitle("");
            setOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
