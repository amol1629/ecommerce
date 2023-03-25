import axios from 'axios';

export const CustomerService = async (email) => {
  const result = await axios.get(
    "http://localhost:4040/customers/email/" + email
  );

  console.log("Result for customer : ", result);
  return result;
};
