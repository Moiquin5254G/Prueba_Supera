import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../../utils/storeApi";

export const Card = ({ card, index, listId }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard, updateCardTitle } = useContext(storeApi);

  const handleOnBlur = () => {
    updateCardTitle(newTitle, index, listId);
    setOpen(!open);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="bg-white p-2 rounded-lg shadow-md mb-2"
        >
          <div className="card-content">
            {open ? (
              <TextareaAutosize
                type="text"
                className="input-card-title w-full p-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur();
                  }
                }}
                autoFocus
              />
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className="card-title-container flex justify-between items-center cursor-pointer"
              >
                <p>{card.title}</p>
                <button
                  onClick={() => {
                    removeCard(index, listId);
                  }}
                  className="text-red-500 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};
