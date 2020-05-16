/**
 *
 * Home
 *
 *
 */
import React, { useEffect, useState } from 'react';
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
  const [filteredMembers, setFilteredMembers] = useState([]);
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredMembers([...members]);
  }, [members]);

  const searchChangeHandler = (event) => {
    const search = event.target.value;
    let aMembers = [...members];
    aMembers = aMembers.filter(el => el.login.includes(search));
    setFilteredMembers(aMembers);
  };

  return (
    <div className="Home" id="home">
      <PageContent page="home" history={history}>
        <FormControl>
          <InputLabel htmlFor="member-search">Type to search for a member</InputLabel>
          <Input
            id="member-search"
            onChange={searchChangeHandler}
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
          {filteredMembers && filteredMembers.map(user => (
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
