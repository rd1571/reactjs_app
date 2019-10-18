import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Table, FormControl, InputGroup, Button } from 'react-bootstrap'

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

    deleteUser = () => {
        alert('delete');
    }

    render() {
        const items = this.state.users.map((list) => 
            <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.company.name}</td>
                <td>{list.email}</td>
                <td>{list.phone}</td>
                <td>
                    <Button variant="danger" onClick={this.deleteUser}>X</Button>
                </td>
            </tr>
        )

        return (
            
            <Container> 

                <Row>
                    <Col md={{ span: 3, offset: 9 }}>
                    <InputGroup className="mb-3 mt-3">
                        <FormControl
                        placeholder="Search"
                        aria-label="Amount (to the nearest dollar)"
                        />
                    </InputGroup>
                    </Col>
                </Row>               
                <Row>
                    <Col sm={12} md={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Fullname</th>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { items }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard
