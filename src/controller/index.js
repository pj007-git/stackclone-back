const User = require("../models").users;

exports.registerUser = async (req, res) => {
  const { username } = req.body;
  console.log(username);
  const userData = {
    name: username,
  };
  let haveAlready = await User.findOne({
    where: {
      name: username,
    },
  })
    .then((user) => user)
    .catch((err) => {
      return res.send(err.message);
    });
  if (haveAlready) {
    let result = {
      message: "User is already registered",
    };
    return res.status(200).send(result);
  }
  User.create(userData)
    .then((data) => {
      if (data) {
        let result = {
          message: "User Created Successfully",
        };
        return res.status(200).send(result);
      }
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

exports.loginUser = async (req, res) => {
  const { username } = req.body;
  const userData = {
    name: username,
  };
  let haveAlready = await User.findOne({
    where: {
      name: username,
    },
  })
    .then((user) => user)
    .catch((err) => {
      return res.status(400).send(err.message);
    });
  if (haveAlready) {
    let result = {
      message: "User Logged In Successfully",
    };
    return res.status(200).send(result);
  } else {
    let result = {
      message: "Not Registerd",
    };
    return res.status(200).send(result);
  }
};
