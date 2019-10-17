import React, { Component } from 'react'
import { Container, Row, Col, Table, FormControl, InputGroup } from 'react-bootstrap';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lists : [
                {
                    id: 1,
                    firstname: 'Mark',
                    lastname: 'Otto',
                    username: '@mdo'
                },
                {
                    id: 2,
                    firstname: 'Jacob',
                    lastname: 'Thornton',
                    username: '@fat'
                },
                {
                    id: 3,
                    firstname: 'Joseph',
                    lastname: 'Joaquin',
                    username: '@phi'
                },
            ]
        }
    }

    render() {
        const items = this.state.lists.map((list) => 
            <tr>
                <td>{list.id}</td>
                <td>{list.firstname}</td>
                <td>{list.lastname}</td>
                <td>{list.username}</td>
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
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
