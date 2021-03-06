import React from 'react';
import styles from './ContactMe.module.scss';
import Header from '../shared/Header/Header';
import ContactForm from './ContactForm/ContactForm';
import styleHelper from '../../Helper.module.scss';

const ContactMe: React.FC = () => (
  <section id="contact-me" className={`${styleHelper.SectionContainer} ${styles.ContactMe}`} data-testid="ContactMe">
    <div className={styles.Header}>
      <Header title="LET'S GET IN TOUCH" />
    </div>
    <div className={styles.ContactForm}>
      <ContactForm />
    </div>
  </section>
);

export default ContactMe;
