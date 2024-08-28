const express=require("express")
const clothRouter=express.Router();
const ClothModel=require('../models/cloth.model')
const authMiddleware=require('../middleware/auth.middleware')

clothRouter.post('/add',authMiddleware,async(req,res)=>{
    const {category,title,brand,discounted_price,sizes,strike_price,discount,rating, rating_count,image}=req.body
    if (!Array.isArray(sizes) || !sizes.every(size => typeof size === 'string')) {
        return res.status(400).json({ message: 'Sizes must be an array of strings.' });
    }
    try {
        const cloth=new ClothModel({
            category,
            title,
            brand,
            discounted_price,
            sizes,
            strike_price,
            discount,
            rating,
            rating_count,
            image
        })
        await cloth.save();
        res.status(201).json({message:"Cloth added successfully"})
    } catch (error) {
        res.status(500).json({message:`Error while creating cloth ${error}`})
    }
})

clothRouter.get('/category/:category',async(req,res)=>{
        const { category } = req.params; 
        try {
            const cloths = await ClothModel.find({ category });
            if (cloths.length === 0) {
                return res.status(404).json({ message: "No cloths found in this category" });
            }
            res.status(200).json(cloths);
        } catch (error) {
            res.status(500).json({ message: `Error fetching cloths: ${error.message}` });
        }
    });
    

module.exports=clothRouter