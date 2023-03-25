import axios from 'axios';
import React from 'react';

export const AdminLoginService = (email) => {
  return axios.get("http://localhost:4040/adminlogin/" + email);
};
  