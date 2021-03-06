import React, { Component } from "react";
import { Button, Grid, Segment, Form, Message } from "semantic-ui-react";
import { navConsts } from "../../constants";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { sEmail: "", sPw: "" };
  }

  render() {
    const { SIGNUP, RECOVER_PASSWORD } = navConsts;
    return (
      <Form>
        <Segment stacked size="huge">
          <Form.Input
            icon="user"
            iconPosition="left"
            placeholder="UCSD Email"
            onChange={e => this.setState({ sEmail: e.target.value })}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            onChange={e => this.setState({ sPw: e.target.value })}
          />
          <Grid>
            <Grid.Row>
              <Grid.Column>

                <Button
                  color="linkedin"
                  size="huge"
                  loading={this.props.onLoadingLogin}
                  onClick={() => {
                    this.props.onLogin(this.state.sEmail, this.state.sPw);
                  }}
                >
                  Login
                </Button>

                <Link to={"/" + SIGNUP}>
                  <Button color="teal" size="huge">
                    Sign Up
                  </Button>
                </Link>


              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Link to={"/" + RECOVER_PASSWORD}>
              <Message id="forgot-pw">Forgot password?</Message>
            </Link>
          </Grid>
        </Segment>
      </Form>
    );
  }
}
