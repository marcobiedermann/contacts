import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

export interface ContactPreviewProps {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
}

function ContactPreview(props: ContactPreviewProps): JSX.Element {
  const { id, name } = props;

  return (
    <div>
      <h2 className={styles.contact__name}>
        <NavLink to={`/contacts/${id}`} className={styles.contact__link} activeClassName="is-active">
          {name.firstName} {name.lastName}
        </NavLink>
      </h2>
    </div>
  );
}

export default ContactPreview;
