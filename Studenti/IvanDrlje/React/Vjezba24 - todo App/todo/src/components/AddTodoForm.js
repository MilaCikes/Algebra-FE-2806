import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from 'prop-types';


class AddTodoForm extends React.Component {
  state = {
    newItem: "",
  };

  handleChange(event) {
    const newItem = event.target.value;
    this.setState({ newItem: newItem });
  }

  handleAddTodoClick(event) {
    event.preventDefault();
    //preveniranje normalne funkcionalnost browsera
    const { newItem } = this.state;
    const {addTodo} = this.props

    if(!newItem || !newItem.trim()){
        return;
    }

    addTodo(newItem);

    this.setState({newItem: ''})
  }

  render() {
    const { newItem } = this.state;

    return (
      <InputGroup size="lg">
        <FormControl
          value={newItem}
          onChange={this.handleChange.bind(this)}
          placeholder="Add Todo"
        />
        <Button
          type="submit"
          variant="outline-secondary"
          onClick={this.handleAddTodoClick.bind(this)}
        >
          Add
        </Button>
      </InputGroup>
    );
  }
}

export default AddTodoForm;


AddTodoForm.propTypes = {
    addTodo: PropTypes.func
}