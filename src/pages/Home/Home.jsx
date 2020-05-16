/**
 *
 * Home
 *
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import PageContent from '../../containers/PageContent/PageContent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { location, user } = this.props;
    if (location.state) {
      let offsetDefault = location.state.offset;
      if (!location.state.offset) offsetDefault = 0;

      const $anchor = document.getElementById(location.state.anchor);
      const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: offsetTop - offsetDefault,
        behavior: 'smooth',
      });
    }
    const logged = user.login != null;
    if (!logged) {
      window.scroll({
        top: 700,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="Home" id="home">
        <header history={history} />
        <PageContent page="home" history={history} />
        <footer history={history} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
