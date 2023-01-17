import { createStore, combineReducers } from 'redux';
import { strContains } from '../utils/strContains';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchReducer from './searchRedux';


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
