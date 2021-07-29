import React, { useState } from "react";

import Button from "../Button";

import {
  CardContainer,
  Row,
  Content,
  Label,
  Value,
  Actions,
  EditIcon,
  RemoveIcon,
  Description,
} from "./styles";

function Card({ data = {}, onEdit, onRemove }) {
  const [expand, setExpand] = useState(false);

  function handleEdit() {
    if (onEdit) onEdit(data);
  }

  function handleRemove() {
    if (onRemove) onRemove(data);
  }

  function toggleExpand() {
    setExpand(!expand);
  }

  return (
    <CardContainer onClick={toggleExpand}>
      <Row>
        <Content width={80}>
          <Label>Title</Label>
          <Value>{data.title}</Value>
        </Content>
        <Content width={20}>
          <Actions>
            <Button onClick={handleEdit}>
              <EditIcon />
            </Button>
            <Button onClick={handleRemove}>
              <RemoveIcon />
            </Button>
          </Actions>
        </Content>
      </Row>
      <Row>
        <Content width={50}>
          <Label>Director</Label>
          <Value>{data.director}</Value>
        </Content>
        <Content width={50}>
          <Label>Year of Release</Label>
          <Value>{data.yearOfRelease}</Value>
        </Content>
      </Row>
      <Row>
        <Content width={100}>
          <Label>Description</Label>
          <Description>
            {expand || data.description?.length < 140
              ? data.description
              : `${data.description?.slice(0, 140)}...`}
          </Description>
        </Content>
      </Row>
    </CardContainer>
  );
}

export default Card;
