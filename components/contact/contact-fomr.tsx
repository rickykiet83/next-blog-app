import { useEffect, useState } from 'react';

import Notification from './../ui/notification';
import classes from './contact-form.module.css';

async function sendContactData(contactDetails: any) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(''); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState('');
  const [disabledSendMessage, setDisabledSendMessage] = useState(false);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus('');
        setRequestError('');
        setDisabledSendMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }

    if (requestStatus !== '') {
      setDisabledSendMessage(true);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: any) {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus('pending');
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredMessage('');
      setEnteredName('');
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your message</label>
          <textarea
            id='message'
            rows={5}
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button disabled={disabledSendMessage}>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
    </section>
  );
}

export default ContactForm;
