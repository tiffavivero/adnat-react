import React from 'react';
import {
    Grid,
    Segment,
    Header,
    Form,
    Label,
    Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import noAuthRequest from './utils/request';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        var postdata = {
            name:'',
            email:'',
            password:'',
            passwordConfirmation: ''
        }
        this.state = {
            postdata,
            sessionId: '',
            errMsg: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }
    handleChange(event){
        let data = this.state.postdata;
        data[event.target.name] = event.target.value;
        this.setState({
            postdata: data
        });
    }
    async HandleSubmit(event){
        event.preventDefault();
        try {
            const url = 'http://localhost:3000/auth/signup';
            const method = 'POST';
            let body = this.state.postdata;
            console.log("hellothere")
            console.log(body);
            let result  = await noAuthRequest(url, body, method);
            console.log(result);
            if ('error' in result) {
                //an error message
            } else {
                //session ID is in the result
                this.setState({sessionId: result['sessionId']});
            }
            
        } catch (error) {

        }
    }
    render() {
        return(
            <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h1" textAlign="center">
                    Sign Up
                </Header>
                <Segment>
                    <Form size="large">
                        <Label>Name: </Label>
                        <Form.Input
                        name="name"
                        fluid
                        onChange={this.handleChange}
                        />
                        <Label>Email: </Label>
                        <Form.Input
                        fluid
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        />
                        <Label>Password: </Label>
                        <Form.Input
                        name="password"
                        fluid
                        type="password"
                        onChange={this.handleChange}
                        />
                        <Label>Confirm password: </Label>
                        <Form.Input
                        fluid
                        type="password"
                        name="passwordConfirmation"
                        onChange={this.handleChange}
                        />
                        <Button size="large" onClick={this.HandleSubmit}>
                            Sign Up
                        </Button>
                    </Form>
                    <Link to="/">Log In</Link>
                </Segment>
            </Grid.Column>
        </Grid>
    
        )
    }
}
    
export default Signup;