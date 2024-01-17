import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts';

export async function action({ params }) {
  document.title = 'Contacts App';
  await deleteContact(params.contactId);
  return redirect('/');
}
