import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    // height: 260,
    height:'150px',
    width:'155px',
    marginLeft: '100px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
