/**
 *
 * User Info Page
 *
 *
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
} from '@material-ui/core';

import * as gitHubActions from '../../actions/githubActions';
import PageContent from '../../containers/PageContent/PageContent';

function UserInfo(props) {
  const userInfo = useSelector(state => state.gitHubReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    const { login } = match.params;
    dispatch(gitHubActions.getUserInfo(login));
  }, [dispatch]);

  return (
    <div className="user-info" id="user-info">
      <PageContent page="user-info">
        <Link to="/">Back</Link>
        <Card>
          <CardHeader
            avatar={
              (
                <Avatar alt={userInfo.login} src={userInfo.avatar_url} />
              )
            }
            title={userInfo.name}
            subheader={`Github user since ${moment(userInfo.created_at).format('DD/MM/YYYY')}`}
          />
          <CardMedia
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <p>{`Number of repositories: ${userInfo.public_repos}`}</p>
            <p>{`Number of followers: ${userInfo.followers}`}</p>
          </CardContent>
        </Card>
      </PageContent>
    </div>
  );
}


export default UserInfo;
