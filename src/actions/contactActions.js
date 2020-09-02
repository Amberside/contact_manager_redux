import { 
  GET_CONTACTS, 
  GET_CONTACT, 
  DELETE_CONTACT, 
  DEL_ERROR,
  ADD_CONTACT,
  UPDATE_CONTACT
 } from './type';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
}

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`);
  
  dispatch({ 
    type: GET_CONTACT,
    payload: res.data
  });
}

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: DEL_ERROR,
      payload: error
   })
  }
}