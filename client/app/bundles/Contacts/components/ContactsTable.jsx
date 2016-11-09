import React, { PropTypes } from 'react';

export default class ContactsTable extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  };

  render() {
    const contacts = this.props.contacts;

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
            </tr>
            {contacts.map((contact, i) => (
            <tr key={i}>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.email_address}</td>
              <td>{contact.phone_number}</td>
              <td>{contact.company_name}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
