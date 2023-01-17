// ACTIONS
const createActionName = actionName => `app/search/${actionName}`;
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH');

// ACTION CREATORS
export const Search = payload => ({ type: UPDATE_SEARCH, payload });

const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCH:
      return action.payload
    default:
      return statePart;
  };
};

export default searchReducer;
