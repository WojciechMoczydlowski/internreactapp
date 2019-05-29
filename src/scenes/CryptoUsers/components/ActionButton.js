import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const ActionButton = props => {
  const { classes } = props;
  const { title , handleClick , backgroundColor} = props;
  const buttonStyle = {
    backgroundColor,

  }
  return (
    <button className = {classes.root} style= {buttonStyle} onClick = {handleClick}>
        {title}
    </button>
  );
};
const styles = theme => ({
root: {
    color: 'white',
    borderRadius: 30,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '20px',
    outline: 'none',
}
});

ActionButton.propTypes = {
    classes: PropTypes.object.isRequired
  };
  

export default withStyles(styles)(ActionButton);
