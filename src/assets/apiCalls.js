import axios from 'axios';

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:8082/login`, {
      email,
      password
    });

    return { data: response.data, status: response.status };
  } catch (error) {
    if (error.response) {
      return { data: error.response.data, status: error.response.status };
    } else if (error.request) {
      return { data: error.response.data, status: 500 };
    } else {
      return { data: error.response.data, status: 500 };
    }
  }
};

export { loginUser };
