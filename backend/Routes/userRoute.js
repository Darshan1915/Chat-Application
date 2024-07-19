import express, { Router } from 'express';

const router = express.Router();

Router.route("/register").post(register);

// export default router;
// module.exports = router; 
export default router;