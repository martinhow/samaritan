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
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postItem = async (item, imageUri) => {
  const itemsUrl = `${url}/users/${currentUser}/items`;

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
  const requestsUrl = url + `/requests/${requestId}`;

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
