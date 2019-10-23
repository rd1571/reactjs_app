import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const AddUserModal = (props) => {
  const {
    buttonLabel,
    className,
    modalTitle,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <Button color="danger" className="mb-3 mt-3" onClick={toggle}>{buttonLabel}</Button>

        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{ modalTitle }</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="user">Name</Label>
                  <Input invalid />
                  <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
  );
}

export default AddUserModal;