import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
    marginTop:"40px",
    maxWidth:"100%"
  },
  marginBottom: {
    marginBottom: '30px',
  },
}));