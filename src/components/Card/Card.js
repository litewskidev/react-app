import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleFavorite } from '../../redux/cardsRedux';

const Card = ({title, id, isFavorite}) => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleFavorite(id, isFavorite))
  };

  const remove = () => {
    dispatch(removeCard(id));
  }

  return(
    <li className={styles.card}>{title}
      <div>
        <button onClick={toggle} className={clsx(styles.cardButton, isFavorite && styles.active)}>
          <i className='fa fa-star-o' />
        </button>
        <button onClick={remove} className={clsx('fa fa-trash', styles.removeButton)} />
      </div>
    </li>
  );
};

export default Card;
