import axios from 'axios';
import Config from './config';
export const PostAPI = async function (data: []) {
  let res = null;
  try {
    await axios(Config(`/abcdefg`, 'post', data, null)).then((response) => {
      if (response.status === 200) {
        res = response;
      }
    });
  } catch (error) {
    console.log(error)
  }

  return res;
};
