import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Radio
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Login = () => (
    <Grid centered columns={2}>
        <Grid.Column>
            <Header as="h2" textAlign="center">
                Login
            </Header>
            <Segment>
                <Form size="large">
                    <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email Address"
                    />
                    <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    />
                    <Radio 
                    label="Remember me"
                    /><br/>
                    <Button size="large">
                        Login
                    </Button>
                </Form>
            </Segment>
            <Message>
                <Link to="/signup">Sign Up</Link><br/>
            <a href="#">Forgot your password?</a>
            </Message>
        </Grid.Column>
    </Grid>
);

export default Login;