import React, { Component } from "react";
import TrelloList from "./TrelloList/TrelloList";
import { connect } from "react-redux";
import { Main, WorkspaceTrello, Header } from "./styles";
import TrelloActionButton from "./TrelloList/TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Main>
          <Header>
            <span>Fake Trello</span>
          </Header>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <WorkspaceTrello
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <TrelloList
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton list />
              </WorkspaceTrello>
            )}
          </Droppable>
        </Main>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
