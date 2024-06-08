import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

const BookList = ({ books, addBookToReadingList }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem key={index}>
          <img src={book.coverPhotoURL} alt='n/a' style={{ width: '50px', marginRight: '10px' }} />
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" color="primary" onClick={() => addBookToReadingList(book)}>
            Add to List
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
