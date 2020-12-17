import React from 'react';
import {
  NewsletterDesc,
  NewsletterField,
  NewsletterForm,
  NewsletterInputField,
  NewsletterInputLabel,
  NewsletterOptionItems,
  NewsletterOptions,
  NewsletterTitle,
  NewsletterWrapper,
  SubmitButton,
} from './NewsletterElements';

const NewsLetter = () => {
  return (
    <NewsletterWrapper>
      <NewsletterOptions>
        <NewsletterOptionItems>Daily news</NewsletterOptionItems>
        <NewsletterOptionItems>Events</NewsletterOptionItems>
        <NewsletterOptionItems>Freebies</NewsletterOptionItems>
        <NewsletterOptionItems>Coupon Codes</NewsletterOptionItems>
        <NewsletterOptionItems>And Much more</NewsletterOptionItems>
      </NewsletterOptions>
      <NewsletterForm action='#'>
        <NewsletterTitle>Join Our Newsletter</NewsletterTitle>
        <NewsletterDesc>
          Sign Up for our newsletter and get your freebie today
        </NewsletterDesc>
        <NewsletterField>
          <NewsletterInputLabel htmlFor='for'>Name</NewsletterInputLabel>
          <NewsletterInputField type='text' required></NewsletterInputField>
        </NewsletterField>
        <NewsletterField>
          <NewsletterInputLabel htmlFor='for'>Email</NewsletterInputLabel>
          <NewsletterInputField type='email' required></NewsletterInputField>
        </NewsletterField>
        <SubmitButton type='submit'>Sign Up</SubmitButton>
      </NewsletterForm>
    </NewsletterWrapper>
  );
};

export default NewsLetter;
