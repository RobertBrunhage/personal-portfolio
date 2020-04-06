import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => (
  <div className={styles.ContactForm} data-testid="ContactForm">
    <form action="https://formspree.io/xaydevvp" method="POST">
      <div className={styles.FieldBox}>
        <p><label>Your Name: </label></p>
        <input required placeholder="John Doe" type="text" name="name" />
      </div>
      <div className={styles.FieldBox}>
        <p><label>Your Email: </label></p>
        <input required placeholder="johndoe@gmail.com" type="email" name="_replyto" />
      </div>
      <div className={styles.FieldBox}>
        <p><label>Message: </label></p>
        <textarea required name="message" rows={6}></textarea>
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  </div>
);

export default ContactForm;
