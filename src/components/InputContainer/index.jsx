import React, { useState } from "react";
import { InputCard } from "../InputCard";

export const InputContainer = ({ listId, type }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="input-container">
      <div className={`transition-height ${open ? "h-auto" : "h-0"}`}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </div>
      <div className="input-content">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          {type === "card" ? "+ Add Card" : "+ Add List"}
        </button>
      </div>
    </div>
  );
};
