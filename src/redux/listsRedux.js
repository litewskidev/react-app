import shortid from "shortid";

// SELECTORS
export const getAllLists = ({lists}) => lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

// ACTIONS
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName(`ADD_LIST`);

// ACTION CREATORS
export const addList = payload => ({type: ADD_LIST, payload});

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default listsReducer;
