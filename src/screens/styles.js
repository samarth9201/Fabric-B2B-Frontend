import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     
     

      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:"100px"
      },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      margin: theme.spacing(1),
      
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width:"86.5%",
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    title: {
      flexGrow: 1,
    },
    tableMain:{
      marginTop:20
    },
    table: {
      minWidth: 600,
      marginBottom:20
    },
    row:{
      backgroundColor:"#80deea"
    },
    btn:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    },
    textF:{
      marginBottom:10
      
    },
    link:{
      color:"white"
    }
  }));

  export default useStyles;