const router = require("express").Router();
const noteController = require("../controllers/noteController");

router.get("/", noteController.note_index);

router.get("/create", noteController.note_create_get);
router.post("/create", noteController.note_create_post);

router.get("/:id/delete", noteController.note_delete_get);
router.post("/:id/delete", noteController.note_delete_post);

router.get("/:id/update", noteController.note_update_get);
router.post("/:id/update", noteController.note_update_post);

router.get("/:id", noteController.note_detail_get);

module.exports = router;
