const express=require('express');
const SliderModel = require('../models/slider.model');
const sliderRouter=express.Router();

sliderRouter.post('/addSlider',async(req,res)=>{
    const {imgUrl,altName,category}=req.body;
    try {
        const slider=new SliderModel({
            imgUrl,
            altName,
            category
        })
        await slider.save();
        res.status(201).json({message:"slider added sucessfully"})
    } catch (error) {
        res.status(500).json({message:`Slider not added sucessfully ${error}`})
    }
})

sliderRouter.get('/category/:category',async(req,res)=>{
    const { category } = req.params; 
    try {
        const sliders = await SliderModel.find({ category });
        if (sliders.length === 0) {
            return res.status(404).json({ message: "No items found in this category" });
        }
        res.status(200).json(sliders);
    } catch (error) {
        res.status(500).json({ message: `Error fetching items: ${error.message}` });
    }
});

module.exports=sliderRouter;

