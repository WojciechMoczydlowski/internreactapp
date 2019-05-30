import React, { Component } from "react";
import Error from "./Error";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import ActionButton from "./ActionButton";
import ConfirmDialogList from "./ConfirmDialogList";
import {
  changeNickname,
  changeEmail,
  changeIpadress
} from "../../../redux/actions/formActions";
import {
  addUser,
  deleteUserList
} from "../../../redux/actions/userListActions";
import {
  handleNicknameError,
  handleEmailError,
  handleIpadressError
} from "../../../redux/actions/errorActions";
import { setDeleteUsersListDialog } from "../../../redux/actions/dialogActions";
class Form extends Component {
  handleNicknameChange = event => {
    this.props.changeNickname(event.target.value);
  };
  handleEmailChange = event => {
    this.props.changeEmail(event.target.value);
  };
  handleIpadressChange = event => {
    this.props.changeIpadress(event.target.value);
  };

  handleAddUser = event => {
    event.preventDefault();
    let validationComplete = true;

    const nickname = this.props.nickname;
    const email = this.props.email;
    const ipadress = this.props.ipadress;
    const users = this.props.users;

    if (!this.uniqueNicknameValidator(users, nickname)) {
      validationComplete = false;
      this.props.handleNicknameError({
        display: true,
        message: "This nickname is used"
      });
    } else if (!this.nicknameIsProvide(nickname)) {
      validationComplete = false;
      this.props.handleNicknameError({
        display: true,
        message: "Fill nickname field"
      });
    } else {
      this.props.handleNicknameError({ display: false, message: "" });
    }
    if (!this.validateEmail(email)) {
      validationComplete = false;
      this.props.handleEmailError({
        display: true,
        message: "Wrong Email format"
      });
    } else if (!this.uniqueEmailValidator(users, email)) {
      validationComplete = false;
      this.props.handleEmailError({
        display: true,
        message: "This Email is used"
      });
    } else {
      this.props.handleEmailError({ display: false, message: "" });
    }
    if (!this.validateIpadress(ipadress)) {
      validationComplete = false;
      this.props.handleIpadressError({
        display: true,
        message: "Wrong Ip adress format"
      });
    } else {
      this.props.handleIpadressError({ display: false, message: "" });
    }

    if (validationComplete) {
      this.props.addUser({ nickname, email, ipadress });
      this.props.changeNickname("");
      this.props.changeEmail("");
      this.props.changeIpadress("");
    }
  };

  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validateIpadress = ipadress => {
    let re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return re.test(String(ipadress));
  };

  uniqueEmailValidator = (users, email) => {
    let result = users.find(item => item.email === email);
    return result === undefined ? true : false;
  };

  uniqueNicknameValidator = (users, nickname) => {
    let result = users.find(item => item.nickname === nickname);
    return result === undefined ? true : false;
  };

  nicknameIsProvide = nickname => {
    return nickname === "" ? false: true;
  };

  handleDeleteList = event => {
    event.preventDefault();
    this.props.setDeleteUsersListDialog(true);
  };
  render() {
    const { classes } = this.props;
    const { nickname, email, ipadress, users } = this.props;
    const { nicknameError, emailError, ipadressError } = this.props;
    const { showDialog } = this.props;
    const displayDeleteListButton = users.length > 0 ? true : false;
    return (
      <React.Fragment>
        <ConfirmDialogList
          display={showDialog}
          showConfirmDialog={this.props.setDeleteUsersListDialog}
          message="Are you sure to delete users list?"
          title="Delete users list"
          delete={this.props.deleteUserList}
        />
        <form className={classes.container} noValidate autoComplete="off">
          <div className={classes.flexWrapperRow}>
            <TextField
              error={nicknameError.display}
              value={nickname}
              label="Nickname"
              className={classes.textField}
              //value={values.name}
              onChange={this.handleNicknameChange}
              margin="normal"
            />
            <Error
              message={nicknameError.message}
              display={nicknameError.display}
            />
          </div>
          <div className={classes.flexWrapperRow}>
            <TextField
              value={email}
              label="Email"
              className={classes.textField}
              // value={values.name}
              onChange={this.handleEmailChange}
              margin="normal"
              error={emailError.display}
            />
            <Error message={emailError.message} display={emailError.display} />
          </div>
          <div className={classes.flexWrapperRow}>
            <TextField
              value={ipadress}
              label="IP adress"
              className={classes.textField}
              //value={values.name}
              onChange={this.handleIpadressChange}
              margin="normal"
              error={ipadressError.display}
            />
            <Error
              message={ipadressError.message}
              display={ipadressError.display}
            />
          </div>
          <div className={classes.flexWrapperRow}>
            <ActionButton
              backgroundColor="#23DBBB"
              title="Add user"
              handleClick={this.handleAddUser}
            />
            {displayDeleteListButton ? (
              <ActionButton
                backgroundColor="red"
                title="Delete list"
                handleClick={this.handleDeleteList}
              />
            ) : (
              <div />
            )}
          </div>
        </form>
      </React.Fragment>
    );
  }
}
const styles = theme => ({
  root: {},
  container: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    width: "300px"
  },
  flexWrapperRow: {
    display: "flex",
    flexDirection: "row"
  }
});

const mapStateToProps = state => ({
  nickname: state.form.nickname,
  email: state.form.email,
  ipadress: state.form.ipadress,
  users: state.userList.usersArr,
  nicknameError: state.errors.nicknameError,
  emailError: state.errors.emailError,
  ipadressError: state.errors.ipadressError,
  showDialog: state.dialog.showDeleteUsersListDialog
});

const mapDispatchToProps = dispatch => {
  return {
    changeNickname: nickname => {
      dispatch(changeNickname(nickname));
    },
    changeEmail: email => {
      dispatch(changeEmail(email));
    },
    changeIpadress: ipadress => {
      dispatch(changeIpadress(ipadress));
    },
    addUser: user => {
      dispatch(addUser(user));
    },
    deleteUserList: () => {
      dispatch(deleteUserList());
    },
    handleNicknameError: error => {
      dispatch(handleNicknameError(error));
    },
    handleEmailError: error => {
      dispatch(handleEmailError(error));
    },
    handleIpadressError: error => {
      dispatch(handleIpadressError(error));
    },
    setDeleteUsersListDialog: payload => {
      dispatch(setDeleteUsersListDialog(payload));
    }
  };
};

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Form);
