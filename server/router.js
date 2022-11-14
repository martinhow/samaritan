const Router = require("@koa/router");
const userController = require("./controllers/user-controller");
const requestController = require("./controllers/request-controller");
const itemController = require("./controllers/item-controller");

const multer = require("@koa/multer");

var upload = multer();

const router = new Router();

// endpoints for users
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", userController.postUser);

// only by email for now!!!
router.post("/login", userController.getUserByEmail);

// endpoints for requests
router.get("/requests", requestController.getRequests);
router.post("/users/:id/requests", requestController.postUserRequest);
router.get("/users/:id/requests", requestController.getUserRequests);
router.get("/requests/:id", requestController.getRequest);
router.patch("/requests/:id", requestController.updateRequest);

// endpoints for items
router.post("/users/:id/items", itemController.postUserItem);
router.get("/users/:id/items", itemController.getUserItems);
router.get("/items/:id", itemController.getItem);
router.patch("/items/:id", itemController.updateItem);

router.post(
  "/items/:id/images",
  upload.single("image"),
  itemController.postItemImage
);

router.get("/items/:id/image", itemController.getItemImage);

module.exports = router;
