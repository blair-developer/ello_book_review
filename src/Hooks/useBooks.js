import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query Books {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const useBooks = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  return {
    books: data ? data.books : [],
    loading,
    error,
  };
};

export default useBooks;
