import { GET_CONTACTS, GET_CONTACT, DELETE_CONTACT, DEL_ERROR } from '../actions/type';

const initialState = {
  contacts: [],
  contact: {},
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return{
        ...state,
        contact: action.payload
      };
    case DELETE_CONTACT:
      return{
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case DEL_ERROR:
      return {
        ...state,
        errors: action.payload
      };
      
    default:
      return state;
  }
}