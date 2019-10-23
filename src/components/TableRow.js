import React, { Component } from 'react'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'
// import { Button } from 'react-bootstrap'

class TableRow extends Component {

    render() {
        const { id, name, company, email, phone} = this.props.users

        //styles
        const action = {
            marginRight: "7px"
        };

        return (
            <tr>
                <td>{ id }</td>
                <td>{ name }</td>
                <td>{ company.name }</td>
                <td>{ email }</td>
                <td>{ phone }</td>
                <td>
                    {/* <Button variant="danger" onClick={() => this.props.deleteUser(id)}>X</Button> */}
                    <a href="!#" style={action} onClick={() => this.props.deleteUser(id)}>
                        <span>                        
                            <FaTrash /> 
                        </span>
                    </a>

                    <a href="!#" style={action} onClick={() => this.props.editUser(id)}>
                        <span>                        
                            <FaPencilAlt />
                        </span>
                    </a>

                    
                    
                </td>
            </tr>
        )
    }
}

export default TableRow
