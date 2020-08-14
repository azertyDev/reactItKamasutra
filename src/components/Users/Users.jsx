import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
      {props.users.map((u) => (
        <div key={u.id} className={styles.content}>
          <div className={styles.row}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  alt="userPhoto"
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
                  }
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}>
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}>
                  Unfollow
                </button>
              )}
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.id}</div>
              <div>{'u.location.city'}</div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
