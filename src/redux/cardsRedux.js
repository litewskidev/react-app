import shortid from "shortid";
import { strContains } from "../utils/strContains";

// SELECTORS
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCard = ({cards}) => cards.filter(card => card.isFavorite === true);

// ACTIONS
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

// ACTION CREATORS
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleFavorite = payload => ({type: TOGGLE_FAVORITE, payload});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  };
};

export default cardsReducer;
