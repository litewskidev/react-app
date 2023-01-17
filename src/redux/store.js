import { createStore, combineReducers } from 'redux';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
import initialState from './initialState';

// SELECTORS
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString)
);
export const getAllColumns = ({ columns }) => columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId
);
export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId
);
export const getAllLists = ({lists}) => lists;

export const getFavoriteCard = ({cards}) => cards.filter(card => card.isFavorite === true
);


// ACTION CREATORS
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload }
);
export const addCard = payload => ({ type: 'ADD_CARD', payload }
);
export const Search = payload => ({ type: 'UPDATE_SEARCH', payload }
);
export const addList = payload => ({type: 'ADD_LIST', payload}
);
export const toggleFavorite = payload => ({type: 'TOGGLE_FAVORITE', payload}
);

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  };
};

const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCH':
      return action.payload
    default:
      return statePart;
  };
};


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchReducer
}
const reducer = combineReducers(subreducers);


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
