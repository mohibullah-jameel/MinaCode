const Config = (
  endpoint: string,
  method: string,
  data: {},
  token: string | null
) => {
  const BASE_URL = 'abcd.com/api/0d913518db84493c9ad3b9ef301bbacb';
  return {
    method: method,
    url: `${BASE_URL}${endpoint}`,
    headers:
      token && token !== null
        ? {
            Authorization: 'Bearer ' + token.substring(1, token.length - 1),
          }
        : {
            'Content-Type': 'application/json',
          },

    data: data && JSON.stringify(data),
  };
};
export default Config;
