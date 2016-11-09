import React, { PropTypes } from 'react';
import ContactsTable from '../components/ContactsTable';

export default class ContactsTableContainer extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);

    this.state = { contacts: props.contacts };
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <ContactsTable contacts={contacts} />
      </div>
    );
  }
}
