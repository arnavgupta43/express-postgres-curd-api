//Centralized Error Handling

const errorHandling = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: 500,
    message: "Somethging went Wrong",
    error: err.message,
  });
};
module.exports = errorHandling;
