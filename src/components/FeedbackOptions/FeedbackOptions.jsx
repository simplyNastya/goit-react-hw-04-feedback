import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={styles.list}>
      {options.map(element => (
        <li key={element} className={styles.item}>
          <button
            onClick={() => onLeaveFeedback(element)}
            type="button"
            className={styles.btn}
          >
            {element}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
