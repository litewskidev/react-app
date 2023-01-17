import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsRedux';

const Card = ({title, id, isFavorite}) => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleFavorite(id, isFavorite))
  };

  return(
    <li className={styles.card}>{title}
      <button onClick={toggle} className={clsx(styles.cardButton, isFavorite && styles.active)}>
        <i className='fa fa-star-o' />
      </button>
    </li>
  );
};

export default Card;
