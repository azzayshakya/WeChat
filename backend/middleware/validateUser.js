import { body, validationResult } from "express-validator";

const validateRegistration = [
  body("email").isEmail().withMessage("Invalid Email Format"),
  body("password")
    .isLength({ min: 3, max: 3 })
    .withMessage("Password must be 3 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
export default validateRegistration;
