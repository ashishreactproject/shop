import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(()=> ({
    root:{
        maxWidth: '100%',
    },
    media:{
        // height: 0,
        // paddingTop: '56.25%', //16:9
        height:'150px',
        width:'155px',
        marginLeft: '70px',
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between',
    },
}));