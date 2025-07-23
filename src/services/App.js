import { baseUrl } from "./Link";

export const getProdact = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/products/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getCategoryData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/categories/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getOneProdactIdData = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/products/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
