import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import IconSearch from './svg-icons/IconSearch';
import './style.css';

const Search: React.FC = () => {
  function handleSubmit(data) {
    // console.log(data);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className='minimalist-form single-line search-form'
    >
      <span className='icon-search'>
        <IconSearch width='28px' height='28px' />
      </span>
      <Input
        name='question'
        type='text'
        placeholder='Type your question…'
        className='input-field'
      />
      <button type='submit' className='button-blue'>
        Search
      </button>
    </Form>
  );
};

export default Search;
