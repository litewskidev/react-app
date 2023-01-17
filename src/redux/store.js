import { createStore } from 'redux';
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

// ACTION CREATORS
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload }
);
export const addCard = payload => ({ type: 'ADD_CARD', payload }
);
export const Search = payload => ({ type: 'UPDATE_SEARCH', payload }
);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCH':
      return { ...state, searchString: action.payload };
    default:
      return state;
  };
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
