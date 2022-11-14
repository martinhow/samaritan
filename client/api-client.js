import Constants from "expo-constants";
const { manifest } = Constants;

const url = `http://${manifest.debuggerHost.split(":").shift()}:4000`;

let currentUser;

export const getCurrentUserId = () => {
  return currentUser["_id"];
};

export const getCurrentUserName = () => {
  return `${currentUser.first_name} ${currentUser.last_name}`;
};

export const setCurrentUser = (user) => {
  console.log("current user ", user);
  currentUser = user;
};

export const loginUser = async (email, password) => {
  console.log("login", { email: email, password: password });
  const user = await fetch(`${url}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
    }),
  }).then((result) => {
    if (result.status == 200) {
      return result.json();
    } else {
      throw "unsuccessful login";
    }
  });

  return user;
};

export const getUser = (userId) => {
  console.log("get userId", userId);
  return fetch(`${url}/users/${userId}`)
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postRequest = (req) => {
  const requestsUrl = `${url}/users/${getCurrentUserId()}/requests`;
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
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postItem = async (item, imageUri) => {
  const itemsUrl = `${url}/users/${getCurrentUserId()}/items`;

  const newItem = await fetch(itemsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => console.log(error));

  const newItemId = newItem["_id"];
  await postImageToItem(imageUri, newItemId);
  return newItem;
};

const postImageToItem = async (imageUri, newItemId) => {
  const data = new FormData();
  const fileName = imageUri.substring(imageUri.lastIndexOf("/") + 1);

  data.append("image", {
    name: fileName,
    type: "image",
    uri: imageUri,
  });

  const itemImageUrl = `${url}/items/${newItemId}/images`;
  return fetch(itemImageUrl, {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: data,
  })
    .then((res) => {
      console.log("success image item post");
      return res;
    })
    .catch((error) => console.error(error));
};

export const patchRequest = async (requestId) => {
  const requestUrl = `${url}/requests/${requestId}`;

  await fetch(requestUrl, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: "TAKEN",
    }),
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => console.log(error));
};
