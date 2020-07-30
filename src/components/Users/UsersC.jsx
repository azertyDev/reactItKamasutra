import React from "react";
import styles from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);

    alert("NEW");
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(response.data.items);
      });
  }
  render() {
    return (
      <div className={styles.container}>
        {this.props.users.map((u) => (
          <div key={u.id} className={styles.content}>
            <div className={styles.row}>
              <div>
                <img
                  alt="userPhoto"
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  }
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
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
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
