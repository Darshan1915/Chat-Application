
import jwt from "jsonwebtoken";
const isAuthenticated = async(req,res,next) => {
  try {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"User not authenticated."})
    };
    const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY);
    //In the decode avriable, we can access the data which we intred at the time of set jwttoken  i.e. "tokenData==userid"
    if(!decode){
        return res.status(401).json({message:"Invalid token"});
    };
    req.id = decode.userId;// Jab client side se request aayegi to ham req se hi access kr payege na isliye hamne "req" ki "id" variable me userid daali hai. Aour ye aisa hi kiya jata hai.
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;

// const req = {
//     id:"",
// }
// req.id = "sdlbgnjdfn"
