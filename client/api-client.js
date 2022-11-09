const url = "http://localhost:4000";

const requestsUrl = url + "/users/63698bb98e29cf3d33598764/requests";

export const postRequest = (req) => {
  return fetch(requestsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  })
    .then((result) => result.json())
    .catch((error) => console.log(error));
};

export const getRequests = () => {
  return fetch(requestsUrl)
    .then((result) => result.json())
    .catch((error) => {
      console.log(error);
    });
};
