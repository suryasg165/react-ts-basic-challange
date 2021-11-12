import React from 'react';

export default ({ name }) => (
  <>
    <h1>Welcome Aspirant,</h1>
    <section>
      Demostrate your basic react skills by developing a simple application:
      <ul>
        <li>GET users from https://jsonplaceholder.typicode.com/users/</li>
        <li>
          Create component(s) that will take users as prop and render name &
          email. The list should be sortable and searchable by name.
        </li>
        <li>
          Each user item should have an action 'View Detail' which displays
          address & company of the particular user
        </li>
      </ul>
    </section>
  </>
);
