export function validateSchema(schema) {
  return (req, res, next) => {
    const valdation = schema.validate(req.body, { abortEarly: false });

    if (valdation.error) {
      const errors = valdation.error.details.map(detail => detail.message);
      return res.status(422).send(errors);
    };

    next();
  };
};