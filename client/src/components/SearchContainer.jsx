import React from 'react';
import { useAllBetsContext } from '../pages/AllBets';
import { Form, useSubmit } from 'react-router-dom';
import FormRowSelect from './FormRowSelect';
import { NFL_TEAMS } from '../../../utils/constants';

const SearchContainer = () => {
  const { searchValues } = useAllBetsContext();
  const { search, sort } = searchValues;
  const submit = useSubmit();

  return (
    <section className='mb-8'>
      <Form>
        <div>
          <FormRowSelect
            onChange={(e) => submit(e.currentTarget.form)}
            labelText='Search by Team'
            name='betTeam'
            list={['all', ...Object.values(NFL_TEAMS)]}
          />
        </div>
      </Form>
    </section>
  );
};

export default SearchContainer;
