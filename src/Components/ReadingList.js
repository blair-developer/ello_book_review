import React from 'react';
import { List, ListItem, ListItemText, Button, } from '@material-ui/core';

const ReadingList = ({ readingList, removeBookFromReadingList }) => {
  return (
    <List>
      {readingList.map((book, index) => (
        <ListItem key={index}>
          <img src={book.coverPhotoURL} alt='n/a' style={{ width: '50px', marginRight: '10px' }} />
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" color="secondary" onClick={() => removeBookFromReadingList(book)}>
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
