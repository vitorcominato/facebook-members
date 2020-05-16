/**
 *
 * DgErrorBoundary
 *
 * Componente de DgErrorBoundary
 */

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as exampleActions from './actions/exampleActions';

class DgErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.showErrorModal = this.showErrorModal.bind(this);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    if (!_.isEqual(prevProps.error, props.error)) {
      this.showErrorModal();
    }
  }

  goToLoginPage() {
    const { history } = this.props;
    history.push('/login');
  }

  showErrorModal() {
    const { error, dispatch } = this.props;
    if (error.serviceError.response) {
      if (error.serviceError.response.status === 401) {
        dispatch(exampleActions.logout());
        this.goToLoginPage();
      }
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps)(DgErrorBoundary);
