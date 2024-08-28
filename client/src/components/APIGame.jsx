import React from 'react';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Form, Link } from 'react-router-dom';
import FormRowSelect from './FormRowSelect';
day.extend(advancedFormat);

const APIGame = ({
  gameId,
  sport_title,
  commence_time,
  home_team,
  away_team,
  away_spread,
  home_spread,
}) => {
  const date = day(commence_time).format('ddd - M/D');
  console.log(away_spread);
  return (
    <Form
      method='post'
      className='grid grid-cols-3 gap-4 p-8'
      key={gameId}
    >
      <FormRowSelect
        name='gameId'
        defaultValue={gameId}
        list={[gameId]}
      />
      <FormRowSelect
        name='sport_title'
        defaultValue={sport_title}
        list={[sport_title]}
      />
      <FormRowSelect
        name='commence_time'
        labelText={date}
        defaultValue={commence_time}
        list={[commence_time]}
      />
      <FormRowSelect
        name='home_team'
        defaultValue={home_team}
        list={[home_team]}
      />
      <FormRowSelect
        name='away_team'
        defaultValue={away_team}
        list={[away_team]}
      />
      <FormRowSelect
        name='home_spread'
        defaultValue={home_spread}
        list={[home_spread]}
      />
      <FormRowSelect
        name='away_spread'
        defaultValue={away_spread}
        list={[away_spread]}
      />

      <button type='submit'>Create Game</button>
    </Form>
  );
};

export default APIGame;
