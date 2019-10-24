import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import UserForm from './UserForm'

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
                  <UserForm toggle={toggle }/>
              </ModalBody>
              <ModalFooter></ModalFooter>
          </Modal>
    </div>
  );
}

export default AddUserModal;