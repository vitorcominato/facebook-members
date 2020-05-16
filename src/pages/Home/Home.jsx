/**
 *
 * Home
 *
 *
 */
import React from 'react';
import './Home.scss';
import PageContent from '../../containers/PageContent/PageContent';

function Home(props) {
  const { history } = props;
  return (
    <div className="Home" id="home">
      <PageContent page="home" history={history} />
    </div>
  );
}


export default Home;
