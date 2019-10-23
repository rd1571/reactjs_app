import React, { Component } from 'react'
import { Table } from 'reactstrap'
import TableRow from './TableRow'

class TableUser extends Component {
    
    render() {

        const listItems = this.props.users.map((user) => (
            <TableRow users={user} key={user.id} deleteUser={this.props.deleteUser} editUser={this.props.editUser} />
        ))

        return (
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
                    { listItems }
                </tbody>
            </Table>
        )
    }
}

export default TableUser
