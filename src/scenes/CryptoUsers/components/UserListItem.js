import React from "react";
import PropTypes from "prop-types";
import ConfirmDialogUser from "./ConfirmDialogUser";
import { withStyles } from "@material-ui/core/styles";

const UserListItem = props => {

  const handleDeleteUser = (nickname) =>{
    props.setDeleteUserDialog(true);
  }

  const { classes } = props;
  const { nickname = '', email = '', ipadress = ''} = props;
  const iconClasses = "fas fa-times " + classes.icon;
  
  return (
    <React.Fragment>
        <ConfirmDialogUser
          display={props.showDialog}
          message= {"Are you shure to delete user?"}
          title="Delete users list"
          delete={props.deleteUser}
          showConfirmDialog={props.setDeleteUserDialog}
          nickname ={nickname}
        />
    <ul className={classes.label}>
      <li className={classes.label_item}>{nickname}</li>
      <li className={classes.label_item}>{email}</li>
      <li className={classes.label_item}>{ipadress}</li>
      <li className={classes.label_cross} onClick = {() =>handleDeleteUser(nickname)}> <i className={iconClasses}/></li>
    </ul>
  </React.Fragment>
  );
};
const styles = theme => ({
  label: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    padding: "10px",
    position:'relative',
  },
  label_item: {
    width: "33.33%",
    padding: "10px",
    color: "black",
  },
  label_cross:{
    padding: "15px",
    position: 'absolute',
    zIndex:'1',
    right:'55px',
    top:'5px',
    cursor:'pointer',
    backgroundColor:'#E6F2FF',
    borderRadius: "50%",
    width:'50px',
    height:'50px',
  },
  icon:{
      position:'relative',
      top:'1px',
      left:'5px'
  }
});

UserListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserListItem);
