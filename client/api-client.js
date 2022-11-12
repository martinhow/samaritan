const url = "http://localhost:4000";

export const currentUser = "63698bb98e29cf3d33598764";

export const postRequest = (req) => {
  const requestsUrl = url + `/users/${currentUser}/requests`;
  return fetch(requestsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => console.log(error));
};

export const getRequests = () => {
  return fetch(`${url}/requests`)
    .then((result) => result.json())
    .catch((error) => {
      console.log(error);
    });
};

export const postItem = (item) => {
  const itemsUrl = url + `/users/${currentUser}/items`;
  return fetch(itemsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => console.log(error));
};
