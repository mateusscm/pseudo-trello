import React, { Component } from "react";
import TrelloList from "./TrelloList/TrelloList";
import { connect } from "react-redux";
import { Main, WorkspaceTrello } from "./styles";
import TrelloActionButton from "./TrelloList/TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Main>
          <div>
            <span>Fake Trello</span>
          </div>
          <WorkspaceTrello>
            {lists.map(list => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list />
          </WorkspaceTrello>
        </Main>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
