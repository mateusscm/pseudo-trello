import React from "react";
import { ContainerCards, InsideContainer, HeaderList } from "./styles";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function TrelloList({ title, cards, listID, index }) {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ContainerCards
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <HeaderList>
            <span>{title}</span>
          </HeaderList>
          <TrelloActionButton listID={listID} />
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ minHeight: 10 }}
              >
                <InsideContainer>
                  {cards.map((card, index) => (
                    <TrelloCard
                      key={card.id}
                      index={index}
                      text={card.text}
                      id={card.id}
                    />
                  ))}
                  {provided.placeholder}
                </InsideContainer>
              </div>
            )}
          </Droppable>
        </ContainerCards>
      )}
    </Draggable>
  );
}
