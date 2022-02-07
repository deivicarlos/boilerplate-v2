import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
} from '../../store/counter/actions';
import { selectCountSelector } from '../../store/counter/selectors';
import styles from './Counter.module.css';

const Counter: FunctionComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCountSelector);

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementCounter())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
