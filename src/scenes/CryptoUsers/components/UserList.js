import React, { Component }  from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import UserListItem from "./UserListItem";
import { deleteUser } from "../../../redux/actions/userListActions";
import { sortByNickname , sortByEmail , sortByIpadress } from "../../../redux/actions/userListActions";


class UserList  extends Component
 {

  handleSorting = (sortBy) =>{
    console.log(sortBy);
    if(sortBy === 'nickname'){
      this.props.sortByNickname();
    }
    else if(sortBy === 'email'){
      this.props.sortByEmail();
    }
    else if(sortBy === 'ipadress'){
      this.props.sortByIpadress();
    }
  }

  render(){
    const { classes } = this.props;
    const { users } = this.props;
    
    console.log('up');
    return (
      <div className={classes.root}>
        <ul className={classes.label}>
          <li className={classes.label_item} onClick = {() => this.handleSorting('nickname')}>Nickname</li>
          <li className={classes.label_item} onClick = {() =>this.handleSorting('email')}>Email</li>
          <li className={classes.label_item} onClick = {() =>this.handleSorting('ipadress')}>IP adress</li>
        </ul>
      <div>
      {users.map(user => (
          <UserListItem key={user.nickname} {...user} />
        ))}
      </div>
      </div>
    );
  }
};
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "15px",
    border: "2px solid #E6F2FF",
    borderRadius: "5px"
  },
  label: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    backgroundColor: "#E6F2FF",
    padding: "10px",
    borderRadius: "5px"
  },
  label_item: {
    width: "33.33%",
    padding: "5px 10px 5px 10px",
    color: "black",
    fontWeight: "bold",
    cursor: 'pointer',
  }
});

UserList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.userList.usersArr
});

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: user => {
      dispatch(deleteUser(user));
    },
    sortByNickname: () => {
      dispatch(sortByNickname());
    },
    sortByEmail: () => {
      dispatch(sortByEmail());
    },
    sortByIpadress: () => {
      dispatch(sortByIpadress());
    },
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(UserList);
