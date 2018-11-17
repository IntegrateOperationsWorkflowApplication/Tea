import React, { Component } from "react";
import {
  Button,
  Icon,
  Grid,
  Header,
  Image,
  Segment,
  Form,
  Message,
  Container
} from "semantic-ui-react";
import holderImage from "../../resources/logo.png";
import logoImage from "../../resources/tealogosmall.png";
import { navConsts } from "../../constants";
import { Link } from "react-router-dom";
import { login } from "../../server/api";

// view for the login page
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { sEmail: "", sPw: "" };
    this.handleLogin = this.handleLogin.bind(this);

    this.state = { sEmail: "", sPw: "" };
  }

  handleLogin() {
    console.log(this.state.sEmail);
    console.log(this.state.sPw);
    login(this.state.sEmail, this.state.sPw);
  }
  handlePW() {
    console.log("Forgot Password");
  }

  render() {
    const { GATEWAY, SIGNUP } = navConsts;
    const { sEmail, sPw } = this.state;
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 800 }}>
            <Header>
              <Grid>
                <Grid.Column
                  width={8}
                  floated="left"
                  textAlign="left"
                  verticalAlign="bottom"
                >
                  <Header as="h1" id="login_tea">
                    TEA
                  </Header>
                </Grid.Column>

                <Grid.Column width={8} floated="right">
                  <Image
                    spaced="right"
                    rounded={true}
                    src={holderImage}
                    width="100px"
                  />
                </Grid.Column>
              </Grid>
            </Header>
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
                      <Link to={"/" + SIGNUP}>
                        <Button color="teal" size="huge">
                          Sign Up
                        </Button>
                      </Link>

                      <Link to={"/" + GATEWAY}>
                        <Button
                          color="linkedin"
                          size="huge"
                          onClick={this.handleLogin}
                        >
                          Login
                        </Button>
                      </Link>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid centered>
                  <Segment onClick={this.handlePW} id="forgot-pw">
                    <u>Forgot password?</u>
                  </Segment>
                </Grid>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}