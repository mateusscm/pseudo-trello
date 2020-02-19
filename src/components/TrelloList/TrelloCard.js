import React from "react";
import { Card } from "./styles";
import { Draggable } from "react-beautiful-dnd";

export default function TrelloCard({ text, id, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{text}</span>
        </Card>
      )}
    </Draggable>
  );
}
