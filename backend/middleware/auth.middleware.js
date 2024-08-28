const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; 
    
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); 

        
        const user = await UserModel.findById(decoded.id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

       
        if (!user.isAdmin) {
            return res.status(403).json({ message: "Access denied. Admins only." });
        }

        req.user = user; 
        next(); 
    } catch (err) {
        res.status(400).json({ message: `Invalid token. ${err.message}` });
    }
};

module.exports = authMiddleware;
