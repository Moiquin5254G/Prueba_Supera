import React, { useContext, useState } from "react";
import OnClickOut from "react-onclickoutside";
import storeApi from "../../utils/storeApi";

export const Title = ({ title, listId }) => {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle, deleteList } = useContext(storeApi);

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onBlur={handleOnBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
              return;
            }}
            autoFocus
            className="border-b border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <h2
            onClick={() => setOpen(!open)}
            className="text-xl font-bold cursor-pointer"
          >
            {title}
          </h2>
          <button
            onClick={() => setOpenOptions(!openOptions)}
            className="focus:outline-none"
          >
            {/* You can add an icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* Add the SVG path here for the icon */}
            </svg>
          </button>
          {openOptions && (
            <OnClickOut
              OnClickOut={(e) => {
                setOpenOptions(!openOptions);
              }}
            >
              <ul className="absolute right-0 top-8 bg-white shadow-md py-2 px-4 rounded-md">
                <li
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    deleteList(listId);
                  }}
                  className="cursor-pointer"
                >
                  Delete List
                </li>
                <li
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpen(!open);
                  }}
                  className="cursor-pointer"
                >
                  Edit card title
                </li>
              </ul>
            </OnClickOut>
          )}
        </div>
      )}
    </>
  );
};