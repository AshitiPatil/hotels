const express = require('express');
const router = express.Router();
const Menu = require('./../models/menu');

router.post('/',async (req,res)=>{
   
    try{
        const data =req.body;
        //create new menu document using model
        const newMenu =new Menu(data);
        //save new menu
        const savedmenu = await newMenu.save();
        console.log("data saved successfully");
        res.status(201).json(savedmenu);
    }
    catch(err){
        console.log("Error saving menu",err);
        res.status(500).json(error);
    }
})


router.get('/',async(req,res)=> {
    try{
        const data = await Menu.find();
    console.log("data fetched");
        res.status(201).json(data);

    }
    catch(err){
        console.log("Error saving menu",err);
        res.status(500).json(error);
    }
})

router.get('/:Taste',async (req,res)=>{
    try{
        const Taste = req.params.Taste;
        if(Taste=='Spicy' || Taste=='Sour' || Taste=='sweet'){
            const response = await Menu.find({taste :Taste});
            console.log("data fetched");
            res.status(200).json(response);
        }
        else{
            res.status(400).json({error:"Invalid menu type"});
        }
    }
    catch(err){
        console.log("Internel server error",err);
        res.status(500).json(error);
    }
})

module.exports = router;