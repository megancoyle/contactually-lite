import React, { PropTypes } from 'react';
import ContactsTable from '../components/ContactsTable';
import axios from 'axios';

export default class ContactsTableContainer extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      contacts: props.contacts,
      dotComOnly: false,
      extensionOnly: false,
      internationalOnly: false
     };

    this.sortBy = this.sortBy.bind(this);
    this.toggleDotComOnly = this.toggleDotComOnly.bind(this);
    this.toggleExtensionOnly = this.toggleExtensionOnly.bind(this);
    this.toggleInternationalOnly = this.toggleInternationalOnly.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  sortBy(key) {
    const contacts = this.state.contacts;
    const sorted = this.state.contacts.sort((contactA, contactB) => {
      return contactA[key] >= contactB[key] ? 1 : -1;
    });

    this.setState({ contacts: sorted });
  }

  toggleDotComOnly(e) {
    const dotComOnly = !this.state.dotComOnly;

    const contacts = this.props.contacts.filter(contact => {
      return !dotComOnly || contact.email_address.endsWith('.com');
    })

    this.setState({
      dotComOnly,
      contacts
    })
  }

  toggleExtensionOnly(e) {
    const extensionOnly = !this.state.extensionOnly;

    const contacts = this.props.contacts.filter(contact => {
      return !extensionOnly || contact.phone_number.includes('x');
    })

    this.setState({
      extensionOnly,
      contacts
    })
  }

  toggleInternationalOnly(e) {
    const internationalOnly = !this.state.internationalOnly;

    const contacts = this.props.contacts.filter(contact => {
      return !internationalOnly || contact.phone_number.includes('1-');
    })

    this.setState({
      internationalOnly,
      contacts
    })
  }

  handleDelete(contact) {
    axios.delete(`/contacts/${contact.id}`);
    const contacts = this.state.contacts.filter(c => c.id !== contact.id);
    this.setState({ contacts });
  }

  render() {
    const { contacts, dotComOnly, extensionOnly, internationalOnly } = this.state;

    return (
      <div>
        <button
          onClick={() => this.sortBy('email_address')}
        >
          Sort by email
        </button>
        <label>.com emails only</label>
        <input
          type="checkbox"
          checked={dotComOnly}
          onChange={this.toggleDotComOnly}
        />
        <label>extensions only</label>
        <input
          type="checkbox"
          checked={extensionOnly}
          onChange={this.toggleExtensionOnly}
        />
        <label>international only</label>
        <input
          type="checkbox"
          checked={internationalOnly}
          onChange={this.toggleInternationalOnly}
        />

        <ContactsTable
         onDelete={this.handleDelete}
         contacts={contacts}
        />
      </div>
    );
  }
}
