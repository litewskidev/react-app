import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Search } from '../../redux/searchRedux';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    dispatch(Search(searchString));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(Search(searchString));
    setSearchString('');
  };

  return(
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
