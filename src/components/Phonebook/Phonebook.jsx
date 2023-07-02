import styles from './Phonebook.module.css';
import ContactForm from '.components/ContactForm/ContactForm';
import ContactList from '.components/ContactList/ContactList';
import Filter from '.components/Filter/Filter';
import React from 'react';

class Phonebook extends React.Component {
    state = {
        contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
      };

      handleAddContact = newContact => {
        const {contsct} = this.state;
        const isDuplicateName = contats.some(
          contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        if (isDuplicateName) {
          alert(`${newContact.name} is alreadt in contacts`);
          return;
        }
      }




}

export default Phonebook;