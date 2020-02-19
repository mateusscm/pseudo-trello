import React from "react";
import { Card } from "./styles";

export default function TrelloCard({ text }) {
  return (
    <Card>
      <span>{text}</span>
    </Card>
  );
}
