import api from "../../services/api";

export const get = () => {
  const url = `clients`;
  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const getById = (id) => {
  const url = `clients/${id}`;
  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const put = (data) => {
  const url = `clients`;
  return new Promise((resolve, reject) => {
    api
      .put(url, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const postOrPut = (data, method) => {
  const url = `clients`;
  return new Promise((resolve, reject) => {
    api({ method, url, data })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const destroy = (id) => {
  const url = `clients/${id}`;
  return new Promise((resolve, reject) => {
    api
      .delete(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};
