import React from "react";
import { Add, Close } from "@material-ui/icons";
import { AddActionButton, Card, Textarea, Action, ButtonAdd } from "./styles";
import { connect } from "react-redux";
import { addList, addCard } from "../../actions";

class TrelloActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  closeForm = e => {
    this.setState({ formOpen: false });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({ text: "" });
      dispatch(addList(text));
    }

    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({ text: "" });
      dispatch(addCard(listID, text));
    }

    return;
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add nova lista" : "Add novo card";
    const buttonMargin = list ? "0px" : "5px";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
    const buttonTextHovered = list ? "none" : "rgba(0,0,0,0.15)";
    const buttonWidth = list ? "300px" : "auto";

    return (
      <AddActionButton
        buttonTextOpacity={buttonTextOpacity}
        buttonTextColor={buttonTextColor}
        buttonTextBackground={buttonTextBackground}
        buttonTextHovered={buttonTextHovered}
        buttonWidth={buttonWidth}
        buttonMargin={buttonMargin}
        onClick={() => this.setState({ formOpen: true })}
      >
        <Add />
        &nbsp;
        <span>{buttonText}</span>
      </AddActionButton>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card style={{ minHeight: 54, minWidth: 272, padding: "6px 8px 2px" }}>
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </Card>
        <Action>
          <ButtonAdd
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
          >
            {buttonTitle}
          </ButtonAdd>
          <Close />
        </Action>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(TrelloActionButton);
