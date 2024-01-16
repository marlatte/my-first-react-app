import { useParams, Link } from 'react-router-dom';
import Spinach from './Spinach';
import Popeye from './Popeye';

const DefaultProfile = () => {
  return <p>Oh, nothing to see here!</p>;
};

const Profile = () => {
  const { name } = useParams();
  let content;

  switch (name) {
    case 'popeye':
      content = <Popeye />;
      break;

    case 'spinach':
      content = <Spinach />;
      break;

    default:
      content = <DefaultProfile />;
      break;
  }

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <ul>
        <li>
          <Link to="../profile/popeye">Popeye</Link>
        </li>
        <li>
          <Link to="../profile/spinach">Spinach</Link>
        </li>
      </ul>
      <hr />
      <h2>The profile visited is here:</h2>
      {content}
    </div>
  );
};

export default Profile;
