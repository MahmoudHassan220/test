import { storageAvailable } from "./storageAvailable";
import { uid } from "uid";

const isAvailabe = storageAvailable("localStorage");

export const getAll = () => {
  try {
    if (isAvailabe) {
      const data = localStorage.getItem("blue-rays");
      return data ? JSON.parse(data) : [];
    } else alert("your browser isn't compitable with this application");
  } catch (error) {
    console.log(error);
  }
};

export const setItem = (item) => {
  try {
    if (isAvailabe) {
      item.id = uid();
      let newData = null;
      if (localStorage.getItem("blue-rays"))
        newData = [...JSON.parse(localStorage.getItem("blue-rays")), item];
      else newData = [item];
      const stringifiedData = JSON.stringify(newData);
      localStorage.setItem("blue-rays", stringifiedData);
      return item.id;
    } else alert("your browser isn't compitable with this application");
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id) => {
  try {
    if (isAvailabe) {
      const newData = JSON.parse(localStorage.getItem("blue-rays")).filter(
        (ele) => ele.id != id
      );
      const stringifiedData = JSON.stringify(newData);
      localStorage.setItem("blue-rays", stringifiedData);
      return id;
    } else alert("your browser isn't compitable with this application");
  } catch (error) {
    console.log(error);
  }
};

export const updateItem = (id, newInfo) => {
  try {
    if (isAvailabe) {
      const newData = JSON.parse(localStorage.getItem("blue-rays")).map(
        (ele) => {
          if (ele.id === id) {
            ele = newInfo;
          }
          return ele;
        }
      );
      const stringifiedData = JSON.stringify(newData);
      localStorage.setItem("blue-rays", stringifiedData);
      return id;
    } else alert("your browser isn't compitable with this application");
  } catch (error) {
    console.log(error);
  }
};
