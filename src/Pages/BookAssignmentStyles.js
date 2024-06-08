import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '20px auto', // Apply margin to center the container with space around it
  },
  gridContainer: {
    justifyContent: 'center', // Center the grid items horizontally
    alignItems: 'center', // Center the grid items vertically
  },
  card: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#00000',
    fontWeight: 'bold'
  },
  showMoreButton: {
    marginTop: theme.spacing(2),
    fontSize: '0.75rem', // Reduce the font size of the button
    textTransform: 'lowercase', // Use lowercase for the button text
  },
  table: {
    width: '100%',
  },
}));

export default useStyles;
