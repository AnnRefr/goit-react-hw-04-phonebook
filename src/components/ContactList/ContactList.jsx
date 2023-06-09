import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <>
            <li className={css.item}>
              <p>
                {name}:{number}
              </p>
              <button
                className={css.button}
                type="button"
                onClick={() => onDeleteContact(id)}
                value="delete"
              >
                Delete contact
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
