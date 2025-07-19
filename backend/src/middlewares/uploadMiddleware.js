import multer from "multer";

const storage = multer.memoryStorage();

const imageFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"));
  }
};


const upload = multer({
  storage: storage,
  fileFilter: imageFileFilter,
  limits: {fileSize: 5 * 1024 * 1024}, // 5mb
});

export default upload;
