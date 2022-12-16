import axiosClient from '../utils';

export default (url: string, params: any, callback: any) => {
  axiosClient
    .get(url, { params })
    .then((response) => callback(response))
    .catch(({ response }) => {
      const { data = {} } = response;
      const error = data.error?.message;

      if (JSON.stringify(error) !== JSON.stringify({}))
        return callback({ error });
      return callback({});
    });
};
