import jwt from "jsonwebtoken";
 
const generateToken = (id) => { // generating jwt token for user login for long time.
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: "30d",
    })
}

export default generateToken;