import styled from 'styled-components';

export const NewsletterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 38rem;
  
`;

export const NewsletterOptions = styled.ul`
  background-color: #ff6d53;
  width: 100%;
  padding: 2rem 1.5rem;
  list-style: none;
  color: #fff;
  font-size: 1.15rem;
  line-height: 1.6;
  border-radius: 0.2rem;
`;

export const NewsletterOptionItems = styled.li`
  :before {
    content: &check;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    padding-right: 0.4rem;
  }
`;

export const NewsletterForm = styled.form`
  background-color: #fff;
  width: 50%;
  margin-left: -50%;
  transform: translateX(-1rem);
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0.4rem 2.2rem -1.4rem rgba(0, 0, 0, 0.6);
  border-radius: 0.2rem;
`;

export const NewsletterTitle = styled.h1`
  color: #ff6d53;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1.4rem 0;
`;

export const NewsletterDesc = styled.p`
  color: #1f1f1f;
  margin: 1rem 0;
`;
export const NewsletterField = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 90%;
`;

export const NewsletterInputField = styled.input`
  border: none;
  background-color: #f1f1f1;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: inset 0 0.15rem 0.2rem #ddd;
`;

export const NewsletterInputLabel = styled.label`
  margin: 0 0 0 0.25rem;
  color: #1f1f1f;
`;

export const SubmitButton = styled.button`

  border: none;
  background-color: #222;
  color:  #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 3rem;
  border-radius: 0.5rem;
  margin: 1rem 0;

`
