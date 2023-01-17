import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/store';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {

  const cards = useSelector(getFavoriteCard);
  if(!cards.length)
        return (
            <div className={styles.no_favorite_cards}>Sorry, no favorite cards!
            </div>
        );

  return(
    <div>
      <PageTitle>favorite</PageTitle>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} {...card}/>)}
      </ul>
    </div>
  );
};

  export default Favorite;
