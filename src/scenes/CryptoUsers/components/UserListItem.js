import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const UserListItem = props => {
  const { classes } = props;
  const { nickname = '', email = '', ipadress = ''} = props;

  return (
    <ul className={classes.label}>
      <li className={classes.label_item}>{nickname}</li>
      <li className={classes.label_item}>{email}</li>
      <li className={classes.label_item}>{ipadress}</li>
    </ul>
  );
};
const styles = theme => ({
  label: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    padding: "10px",
  },
  label_item: {
    width: "33.33%",
    padding: "10px",
    color: "black",
  }
});

UserListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserListItem);
