import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../ENV.js";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const users = await User.find();
  const existingUser = await User.findOne({ email });
  if(existingUser) {res.status(400).json({message:"Email Already Exists"});}
  if (
    !name ||
    !email ||
    !password ||
    name === "" ||
    email === "" ||
    password === "" 
  ) {
    res.status(400).json({message:"All fields are required"});
  }



  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    id: email.split("@")[0],
    name,
    email,
    password: password,
    role:"Student",
    verified: false
  });

  try {
    await newUser.save();
    res.json("signup successful");
    console.log('signup successful');
  } catch (error) {
    next("Check all the fields");
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    // const validPassword = bcryptjs.compareSync(password, validUser.password);
    const validPassword = password === validUser.password?true:false;
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(errorHandler(404, "User not found"));
  }
};

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out");
  } catch (error) {
    next(errorHandler(404, "User not found"));
  }
};


export const google = async (req, res, next) => {
  const { email, name, photoURL } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        JWT_SECRET
      );
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      console.log(photoURL);
      const newUser = new User({
        username: email.split("@")[0],
        name,
        email,
        password: hashedPassword,
        profilePicture: photoURL,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
