import React, { useState, useEffect } from "react";

import Button from "../../components/Button";
import AddModal from "../../components/AddModal";
import CardsList from "../../components/CardsList";

import { Container, AddContainer } from "./styles";

import { getAll, deleteItem } from "../../utils/Storage";

function Home() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);

  function onEdit(item) {
    setEditMode(true);
    onOpenModal();
    setEditData(item);
  }

  function onRemove(item) {
    deleteItem(item.id);
    setLoading(!loading);
  }

  useEffect(() => {
    setData(getAll());
  }, [loading]);

  function onOpenModal() {
    setShowAddModal(true);
    console.log("click added");
  }

  function onCloseModal() {
    setShowAddModal(false);
    setEditData(null);
    setEditMode(false);
  }

  return (
    <Container>
      <AddContainer>
        <Button onClick={onOpenModal}>Add</Button>
      </AddContainer>
      <CardsList data={data} onEdit={onEdit} onRemove={onRemove} />
      {showAddModal && (
        <AddModal
          isOpen
          onClose={onCloseModal}
          setLoading={setLoading}
          editMode={editMode}
          editData={editData}
          loading={loading}
        />
      )}
    </Container>
  );
}

export default Home;
