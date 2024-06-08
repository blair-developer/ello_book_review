import React, { useState, useMemo } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import SearchBar from '../Components/SearchBar';
import BookList from '../Components/BookList';
import ReadingList from '../Components/ReadingList';
import useBooks from '../Hooks/useBooks';
import useStyles from './BookAssignmentStyles';

const BookAssignment = () => {
  const classes = useStyles();
  const { books, loading, error } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState([]);
  const [showAllBooks, setShowAllBooks] = useState(false);

  const filteredBooks = useMemo(() => {
    if (searchTerm) {
      return books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return showAllBooks ? books : books.slice(0, 5);
  }, [books, searchTerm, showAllBooks]);

  const addBookToReadingList = (book) => {
    setReadingList((prevList) => {
      if (!prevList.some(b => b.title === book.title)) {
        return [...prevList, book];
      }
      return prevList;
    });
  };

  const removeBookFromReadingList = (bookToRemove) => {
    setReadingList((prevList) =>
      prevList.filter((book) => book.title !== bookToRemove.title)
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books.</p>;

  return (
    <Container className={classes.container}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" className={classes.elloBookTitle}>Ello-Book</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" className={classes.title}>Book Collections</Typography>
                  <BookList books={filteredBooks} addBookToReadingList={addBookToReadingList} />
                  {!showAllBooks && books.length > 5 && (
                    <Button
                      variant="contained"
                      color="inherit"
                      className={classes.showMoreButton}
                      onClick={() => setShowAllBooks(true)}
                    >
                      click for more books
                    </Button>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" className={classes.title}>Reading List</Typography>
                  <ReadingList readingList={readingList} removeBookFromReadingList={removeBookFromReadingList} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookAssignment;
