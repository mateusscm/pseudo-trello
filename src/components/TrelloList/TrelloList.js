import React from "react";
import { ContainerCards, InsideContainer, HeaderList } from "./styles";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

export default function TrelloList({ title, cards, listID }) {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <ContainerCards {...provided.droppableProps} ref={provided.innerRef}>
          <HeaderList>
            <span>{title}</span>
            <TrelloActionButton listID={listID} />
          </HeaderList>
          <InsideContainer>
            {cards.map((card, index) => (
              <TrelloCard
                key={card.id}
                index={index}
                text={card.text}
                id={card.id}
              />
            ))}
          </InsideContainer>
          {provided.placeholder}
        </ContainerCards>
      )}
    </Droppable>
  );
}
