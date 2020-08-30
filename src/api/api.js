import * as axios from 'axios';
import { follow } from '../redux/usersReducer';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'api-key': '9e99222b-725a-43eb-ab98-3854888c2ef2'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  }
};

export const authAPI = {
  me() {
    return instance.get('auth/me');
  }
};
