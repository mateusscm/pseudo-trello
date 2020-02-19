import React from "react";
import { ContainerCards, InsideContainer } from "./styles";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

export default function TrelloList({ title, cards }) {
  return (
    <ContainerCards>
      <span>{title}</span>
      <TrelloActionButton />
      <InsideContainer>
        {cards.map(card => (
          <TrelloCard key={card.id} text={card.text} />
        ))}
      </InsideContainer>
    </ContainerCards>
  );
}
