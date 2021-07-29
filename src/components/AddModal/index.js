import React, { useState, useEffect } from "react";

import Modal from "../Modal";
import TextField from "../TextField";
import TextArea from "../TextArea";
import Button from "../Button";

import { Content, FormControl, Label, AddButtonContainer } from "./styles";

import { setItem, updateItem } from "../../utils/Storage";

function AddModal({
  isOpen,
  onClose,
  setLoading,
  editMode,
  editData,
  loading,
}) {
  const initialState = {
    title: "",
    yearOfRelease: "",
    director: "",
    description: "",
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (editMode && Boolean(editData)) {
      setState(editData);
    }
  }, [editMode, editData]);

  function saveData(newData) {
    setState({ ...state, ...newData });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!state.title) {
      alert("You must add a title");
      return;
    }
    if (state.yearOfRelease) {
      const currentYear = new Date().getFullYear();
      console.log(currentYear.toString());
      if (state.yearOfRelease < 1888 || state.yearOfRelease > currentYear) {
        alert("The release year must be witnin 1888-now");
        return;
      }
    }
    setLoading(true);
    if (editMode) updateItem(editData.id, state);
    else setItem(state);
    if (state) {
      setState(initialState);
      onClose();
      setLoading(!loading);
    }
  }

  console.log({ state });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Content onSubmit={onSubmit}>
        <FormControl>
          <Label>Title</Label>
          <TextField
            value={state.title}
            onChange={(e) => saveData({ title: e })}
          />
        </FormControl>
        <FormControl>
          <Label>Director</Label>
          <TextField
            value={state.director}
            onChange={(e) => saveData({ director: e })}
          />
        </FormControl>
        <FormControl>
          <Label>Year of Release</Label>
          <TextField
            type="number"
            value={state.yearOfRelease}
            onChange={(e) => saveData({ yearOfRelease: e })}
          />
        </FormControl>
        <FormControl fullWidth>
          <Label>Description</Label>
          <TextArea
            value={state.description}
            onChange={(e) => saveData({ description: e })}
          />
        </FormControl>

        <AddButtonContainer>
          <Button type="submit">Add</Button>
        </AddButtonContainer>
      </Content>
    </Modal>
  );
}

export default AddModal;
