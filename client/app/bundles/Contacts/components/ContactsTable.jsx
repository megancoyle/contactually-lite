import React, { PropTypes } from 'react';

export default class ContactsTable extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { contacts, onDelete } = this.props;
    // const contacts = this.props.contacts;
    // const onDelete = this.props.onDelete;

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Company Name</th>
              <th></th>
            </tr>
            {contacts.map((contact, i) => (
            <tr key={i}>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.email_address}</td>
              <td>{contact.phone_number}</td>
              <td>{contact.company_name}</td>
              <td><a href='' onClick={(event) => {
                event.preventDefault();
                onDelete(contact);
              }}>x</a></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
