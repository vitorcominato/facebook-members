/**
 *
 * User Info
 *
 *
 */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import getUserInfo from '../../actions/githubActions';
import PageContent from '../../containers/PageContent/PageContent';

function UserInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getUserInfo());
  }, [dispatch]);


  return (
    <div className="user-info" id="user-info">
      <PageContent page="user-info">
        <span>Teste</span>
      </PageContent>
    </div>
  );
}


export default UserInfo;
