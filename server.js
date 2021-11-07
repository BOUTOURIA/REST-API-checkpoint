const express=require('express')
const app=express()
const User=require('./models/User')

const connectDB=require('./config/connectDB')
connectDB()

require("dotenv").config()

app.use(express.json())


const port=8000
app.listen(port,(error)=>{
    error?console.log(error):console.log(`the server is running on ${port}`)
})

app.get("/ALL",  async (req, res) => {
  try {
      const user=await User.find()
      res.status(200).json(user)
  } catch (error) {
      res.status(404).json({message: error.message})
  }
});

app.post("/ADD", async (req, res) => {
    const user = req.body;
    try {
      const newUser = await User.create(user);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  app.put("/EDIT/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  app.delete("/DELETE/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedUser = await User.findByIdAndRemove(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  
