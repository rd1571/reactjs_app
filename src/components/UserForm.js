import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export class UserForm extends Component {
    submitHandler = (e) => {
        e.preventDefault();
        console.log();
    }

    render() {
        return (
            <div>
                <Form onSubmit={ this.submitHandler }>             
                    <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type="name" name="name" placeholder="John Doe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Company">Company</Label>
                        <Input type="text" name="company" placeholder="Next BPO Solutions Inc." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" placeholder="raymart.alcantara@it.nextbposolutions.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Phone">Phone</Label>
                        <Input type="text" name="phone" placeholder="+639301925684" />
                    </FormGroup>
                    <Button type="button" color="secondary">Submit</Button>
                </Form>
            </div>
        );
  }
}

export default UserForm
