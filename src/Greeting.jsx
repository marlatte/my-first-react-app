import { useState } from 'react';
import PropTypes from 'prop-types';

function Greeting() {
  return (
    <>
      <h1>Test title</h1>
      <ol className="test-list">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </>
  );
}

export default Greeting;

const johnWayne = {
  firstName: 'John',
  lastName: 'Wayne',
  age: 100,
};

export function Person({ initPerson }) {
  const [person, setPerson] = useState(initPerson);

  function handleChange(e) {
    const changedName = `${e.target.id}Name`;
    const newPerson = { ...person };
    newPerson[changedName] = e.target.value;
    setPerson(newPerson);
  }

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <Inputs id={'first'} name={person.firstName} onChange={handleChange} />
      <Inputs id={'last'} name={person.lastName} onChange={handleChange} />
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

Person.propTypes = {
  initPerson: PropTypes.object.isRequired,
};

Person.defaultProps = {
  initPerson: johnWayne,
};

function Inputs({ id, name, onChange }) {
  return <input id={id} value={name} onChange={onChange} />;
}

Inputs.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
