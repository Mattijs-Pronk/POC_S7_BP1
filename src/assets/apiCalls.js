import axios from 'axios';

const loginUser = async (email, password) => {
    try {
      const response = await axios.get(``);
      const user = response.data;
      console.log(user);
      return user;
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
      return null;
    }
  }
  
export { loginUser };