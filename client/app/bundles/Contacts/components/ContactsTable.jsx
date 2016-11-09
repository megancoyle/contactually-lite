import React, { PropTypes } from 'react';

export default class ContactsTable extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        Table!
      </div>
    );
  }
}
