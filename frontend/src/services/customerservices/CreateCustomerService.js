import axios from 'axios';

export const CreateCustomerService = (data) => {
  console.log(data)
  return axios.post("http://localhost:4040/customers", data);
};
