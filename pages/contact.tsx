import ContactForm from '../components/contact/contact-fomr';
import Head from 'next/head';
import React from 'react';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content=''></meta>
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
