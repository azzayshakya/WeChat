import { body, validationResult } from "express-validator";

const validateRegistration = [
  body("email").isEmail().withMessage("Invalid Email Format"),
  body("password")
    .isLength({ min: 3, max: 3 })
    .withMessage("Password must be 3 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // To get the just msg
      // return res.status(400).json({ errors: errors.array() });

      // To get the full array error
      const firstError = errors.array()[0].msg;
      return res.status(400).json({ message: firstError });
    }
    next();
  },
];
export default validateRegistration;
