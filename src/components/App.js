import React, { Component } from "react";
import TrelloList from "./TrelloList/TrelloList";
import { connect } from "react-redux";
import { Main, WorkspaceTrello } from "./styles";
import TrelloActionButton from "./TrelloList/TrelloActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <Main>
        <div>
          <span>Fake Trello</span>
        </div>
        <WorkspaceTrello>
          {lists.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
          <TrelloActionButton list />
        </WorkspaceTrello>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
