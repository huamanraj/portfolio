// pages/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [warning, setWarning] = useState('');
  const [lastSentTime, setLastSentTime] = useState(null);

  const MINUTE_IN_MS = 60 * 1000; // 1 minute in milliseconds

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date().getTime();
    if (lastSentTime && (now - lastSentTime < MINUTE_IN_MS)) {
      setWarning('You can only send one message per minute. Please wait before sending another.');
      return;
    }

    setWarning('');
    setStatus('sending');

    emailjs.sendForm('service_x9q1bjl', 'template_x2n50rd', form.current, 'rg0jboprn9B50aHdM')
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current.reset();
        setLastSentTime(new Date().getTime());
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl text-md-yellow mb-6">Contact Me</h1>
      <div className="bg-md-bg border border-md-text/20 rounded-lg p-6">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block text-md-blue mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full px-3 py-2 bg-md-bg border border-md-text/40 rounded-md text-md-text focus:outline-none focus:border-md-purple"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-md-blue mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full px-3 py-2 bg-md-bg border border-md-text/40 rounded-md text-md-text focus:outline-none focus:border-md-purple"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-md-blue mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full px-3 py-2 bg-md-bg border border-md-text/40 rounded-md text-md-text focus:outline-none focus:border-md-purple"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-md-green text-md-bg px-6 py-2 rounded hover:bg-md-blue transition-colors duration-300"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-md-green">Your message was sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-md-red">There was an error sending your message. Please try again.</p>
        )}
        {warning && (
          <p className="mt-4 text-md-red">{warning}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
