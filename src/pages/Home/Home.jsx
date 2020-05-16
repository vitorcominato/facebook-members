/**
 *
 * Home
 *
 *
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  List,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core';

import ImageIcon from '@material-ui/icons/Image';
import SearchIcon from '@material-ui/icons/Search';

import getMembers from '../../actions/githubActions';
import PageContent from '../../containers/PageContent/PageContent';
import './Home.scss';

function Home(props) {
  const members = useSelector(state => state.gitHubReducer.members);
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  console.log('state', members);
  return (
    <div className="Home" id="home">
      <PageContent page="home" history={history}>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }
          />
        </FormControl>
        <List>
          {members && members.map(user => (
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={user.login} src={user.avatar_url}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.login} />
            </ListItem>
          ))}

        </List>
      </PageContent>
    </div>
  );
}


export default Home;
