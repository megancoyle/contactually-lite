import React from 'react';
import ReactOnRails from 'react-on-rails';

import ContactsTableContainer from '../containers/ContactsTableContainer';

const ContactsApp = (props) => (
  <ContactsTableContainer {...props} />
);

// This is how react_on_rails can see the ContactsApp in the browser.
ReactOnRails.register({ ContactsApp });
