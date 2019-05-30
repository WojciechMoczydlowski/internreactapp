import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import UserListItem from "./UserListItem";
import { deleteUser } from "../../../redux/actions/userListActions";
import {
  sortByNickname,
  sortByEmail,
  sortByIpadress
} from "../../../redux/actions/userListActions";
import {
  setDeleteUserDialog
} from "../../../redux/actions/dialogActions";

class UserList extends Component {
  handleSorting = sortBy => {
    if (sortBy === "nickname") {
      this.props.sortByNickname();
    } else if (sortBy === "email") {
      this.props.sortByEmail();
    } else if (sortBy === "ipadress") {
      this.props.sortByIpadress();
    }
  };
  randomId = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  render() {
    const { classes } = this.props;
    const { users } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <ul className={classes.label}>
            <li
              className={classes.label_item}
              onClick={() => this.handleSorting("nickname")}
            >
              Nickname
            </li>
            <li
              className={classes.label_item}
              onClick={() => this.handleSorting("email")}
            >
              Email
            </li>
            <li
              className={classes.label_item}
              onClick={() => this.handleSorting("ipadress")}
            >
              IP adress
            </li>
          </ul>
          <div>
            {users.map(user => (
              <UserListItem
                key={this.randomId()}
                deleteUser={this.props.deleteUser}
                showDialog = {this.props.showDialog}
                setDeleteUserDialog = {this.props.setDeleteUserDialog}
                {...user}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
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
    cursor: "pointer"
  }
});

UserList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.userList.usersArr,
  showDialog: state.dialog.showDeleteUserDialog,
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
    setDeleteUserDialog: payload => {
      dispatch(setDeleteUserDialog(payload));
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
