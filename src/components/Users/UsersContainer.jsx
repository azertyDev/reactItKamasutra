import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import { GridLoader } from 'react-spinners';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <GridLoader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    getUsers
  }),
  withAuthRedirect
)(UsersContainer);
