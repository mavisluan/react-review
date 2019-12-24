import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ListGroup, Button } from 'react-bootstrap';

const ConfirmModal = ({
  show,
  handleClose,
  fullName,
  ageRange,
  adoptPets,
  adoptSiblings,
  currPetCount,
  currPetInfo,
}) => (
  <Modal show={show} onHide={handleClose} className="d-inline-block offset-1">
    <Modal.Header closeButton>
      <Modal.Title>Adoption confirmation</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          FullName: <span className="text-primary"> {fullName}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          AgeRange: <span className="text-warning"> {ageRange}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          Pet Types:
          {adoptPets.map((pet, index) => (
            <span key={index} className="text-primary ml-2">
              {index === adoptPets.length - 1 ? pet : `${pet},`}
            </span>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          Adopt siblings:
          <span className="text-warning"> {adoptSiblings[0]}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          currPetCount:<span className="text-primary"> {currPetCount}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          Description: <span className="text-warning"> {currPetInfo}</span>
        </ListGroup.Item>
      </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  ageRange: PropTypes.string.isRequired,
  adoptPets: PropTypes.array.isRequired,
  adoptSiblings: PropTypes.array.isRequired,
  currPetCount: PropTypes.number.isRequired,
  currPetInfo: PropTypes.string.isRequired,
};

export default ConfirmModal;
