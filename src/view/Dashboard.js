import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Input } from 'reactstrap'
import TableUser from '../components/TableUser'
import AddUserModal from '../components/AddUserModal'

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    deleteUser = (id) => {
        console.log(`delete=${id}`);
        // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        // .then(res => {

        // });
    }

    editUser = (id) => {
        console.log(`edit=${id}`);
    }

    render() {

        return (
            
            <Container> 
                
                <Row>
                    <Col>
                        <AddUserModal buttonLabel="+" modalTitle="Add User"/>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Input type="search" name="search" className="mb-3 mt-3" placeholder="Search..." />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <TableUser users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
                    </Col>
                </Row>

                
            </Container>
        )
    }
}

export default Dashboard
