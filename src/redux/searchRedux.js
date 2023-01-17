const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCH':
      return action.payload
    default:
      return statePart;
  };
};

export default searchReducer;
