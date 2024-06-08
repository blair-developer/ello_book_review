import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

const BookList = ({ books, addBookToReadingList }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={book.coverPhotoURL}
            alt='n/a'
            style={{ width: '120px', height: 'auto', marginRight: '10px', borderRadius: '8px' }}
          />
          <ListItemText primary={book.title} secondary={book.author} style={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => addBookToReadingList(book)}
            style={{ whiteSpace: 'nowrap' }}
          >
            Add to List
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
