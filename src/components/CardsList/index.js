import React from "react";

import Card from "../Card";

import { CardsListContainer } from "./styles";

function CardsList({ data = [], onEdit, onRemove }) {
  return (
    <CardsListContainer>
      {data.map((item) => (
        <Card key={item.id} data={item} onEdit={onEdit} onRemove={onRemove} />
      ))}
    </CardsListContainer>
  );
}

export default CardsList;
