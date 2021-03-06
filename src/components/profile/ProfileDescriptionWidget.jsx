import React, { Component } from "react";
import { Segment, Grid, Button, Checkbox, Form } from "semantic-ui-react";
//import EditDescriptionForm from "./EditDescriptionForm";
import './profile.css'

export default class ProfileDescriptionWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      formContents: undefined
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    console.log("reached");
    /* let newState =
      this.state.displayForm === true ? (newState = false) : (newState = true); */
    this.setState({ displayForm: true });
    console.log(this.state);
  }

  handleSubmit() {
    console.log(this.state.formContents);
    console.log("submitted");
    this.props.handleSubmit(this.state.formContents);
    this.setState({ displayForm: false });
    console.log(this.state);
  }

  render() {
    return (
      <Segment style={{height:'100%'}}>
          {this.state.displayForm === true && (
            <Form size="massive">
              <Form.TextArea
                label="Edit Profile Description"
                placeholder={this.props.profileDescription}
                onChange={e => this.setState({ formContents: e.target.value })}
              />
              <Button
                type="submit"
                color="linkedin"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form>
          )}
          {this.state.displayForm === false && (
            <Segment style={{height:'100%'}} textAlign='center'>
              <h1>
                About Me
                <div>
                  <a onClick={this.handleClick}>
                    <font size="2">Edit Description</font>
                  </a>
                </div>
              </h1>
              <p id='prof-desc'>{this.props.profileDescription}</p>
            </Segment>
          )}
      </Segment>
    );
  }
}

