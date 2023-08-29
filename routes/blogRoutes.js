const express = require("express");
const { getAllBlogsController,
    createBlogController,
    updateBlogController,
    deleteBlogController,
    getBlogByIdController,
    userBlogController } = require("../controller/blogController");
const router = express.Router();



router.get("/all-blog", getAllBlogsController);


// POSt crete blog


router.post("/create-blog", createBlogController);

// put update blog

router.put("/update-blog/:id", updateBlogController);


// get ||Single Blog Details

router.get("/get-blog/:id", getBlogByIdController)
// Delete 

router.delete("/delete-blog/:id", deleteBlogController)

router.get("/user-blog/:id", userBlogController)
module.exports = router;