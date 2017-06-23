import React from 'react';
import { connect } from 'react-redux';

import Modal from './modal';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({modal}) => {
  return ({
    isOpen: modal.isOpen,
    component: modal.component
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: (component) => { return dispatch(openModal(component)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);