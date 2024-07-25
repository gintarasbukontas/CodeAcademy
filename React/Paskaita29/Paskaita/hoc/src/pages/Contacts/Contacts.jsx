import withAuth from "../../components/withAuth";

function Contacts() {
  return <div>Contacts</div>;
}

const ContactsWithAuth = withAuth(Contacts);

export default ContactsWithAuth;
