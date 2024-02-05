import React, { useEffect, useState } from "react";
import "./style.css";

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = React.useState("");
  const [items, setItems] = React.useState(getLocalData());
  const [isEditItem, setIsEditItem] = React.useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const addItem = () => {
    if (!inputData) {
      alert("plz fill the data");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((element) => {
          if (element.id === isEditItem) {
            return { ...element, name: inputData };
          }
          return element;
        })
      );
      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };
  //edit items
  const editItem = (index) => {
    const item_todo_edited = items.find((element) => {
      return element.id === index;
    });
    setIsEditItem(index);
    setInputData(item_todo_edited.name);
    setToggleButton(true);
  };

  //Delete Items
  const deleteItem = (index) => {
    const updatedItem = items.filter((element) => {
      return element.id !== index;
    });
    setItems(updatedItem);
  };
  const removeAll = () => {
    setItems([]);
  };

  // adding to localstorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          {/*show our items*/}
          <div className="showItems">
            {items.map((element) => {
              return (
                <>
                  <div className="eachItem" key={element.id}>
                    <h3>{element.name}</h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-edit add-btn"
                        onClick={() => editItem(element.id)}
                      ></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        onClick={() => deleteItem(element.id)}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/*remove all Button*/}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
