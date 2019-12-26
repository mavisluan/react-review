import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ListGroup, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, handleClose, adoptInfo }) => (
  <Modal show={show} onHide={handleClose} className="d-inline-block offset-1">
    <Modal.Header closeButton>
      <Modal.Title>Adoption confirmation</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup variant="flush">
        {Object.keys(adoptInfo).map(key => (
          <ListGroup.Item key={key}>
            <span className="font-weight-bold text-capitalize">{key}:</span>{' '}
            {Array.isArray(adoptInfo[key]) // if it's an array -> display items with comma in between
              ? adoptInfo[key].map((item, index) =>
                  index === adoptInfo[key].length - 1 ? item : `${item}, `
                )
              : adoptInfo[key]}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);
// TODO: fix the currPetCount propTypes (when it gets passed, num --> string)
ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  adoptInfo: PropTypes.shape({
    fullName: PropTypes.string,
    ageRange: PropTypes.string,
    adoptPets: PropTypes.array,
    adoptSiblings: PropTypes.array,
    currPetCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currPetInfo: PropTypes.string,
  }).isRequired,
};

export default ConfirmModal;
