import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const ErrorComp = props => {
  const { classes } = props;
  const { message, display } = props;
  return (
    <div className={classes.root}>
      {display ? <div className={classes.error}>{message}</div> : <div />}
    </div>
  );
};
const styles = theme => ({
  root: { display: 'flex',
  alignItems: 'center',
  paddingLeft: '35px',
},
error: { 
backgroundColor: '#FBE2ED',
color:'#CC0000',
padding:'10px',
borderRadius: '10px',
},
});

ErrorComp.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(styles)(ErrorComp);
