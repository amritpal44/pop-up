const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

const userModel = require("./models/userModel");
const { act } = require("react");
const { connect } = require("./config/database");
const app = express();

app.use( cookieParser() );
app.use( express.json() );
app.use( cors({
    origin: true, // Allows all origins
    credentials: true
}) );

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running."
    })
})

app.post("/addUser", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }
      const existingUser = await userModel.findOne({ email });
  
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "User with this email already exists",
        });
      }

      const newUser = await userModel.create({
        email: email,
        popupsShown: [] // Initially no popups shown
      });
  
      return res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      console.error("Error while adding user:", error);
      return res.status(500).json({
        success: false,
        message: "Server error while adding user",
      });
    }
});

app.post('/addPopupDetails', async (req, res) => {
    try {
        const {email, title, action} = req.body;
    
        if(!email || !title || !action){
            return res.status(400).json({
                success: false,
                message: "field missing in request body"
            })
        }

        const validActions = ['opened', 'closed'];
        if(!validActions.includes(action)){
            return res.status(400).json({
                success: false,
                message: "Invalid action"
            })
        }
    
        //creating a user if not found but in production user will already exists
        //no need for upsert in production
        const updatedUser = await userModel.findOneAndUpdate( { email: email},
            {
                $push: {
                    popupsShown: {
                        title: title,
                        date: new Date(),
                        action: action
                    }
                }
            },
            //{ upsert: true }
        )

        if(!updatedUser){
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "popup details added to user db successfully"
        })
        
    } catch (error) {        
        console.log("Error while adding popup details: ", error);
        return res.status(500).json({
            success: false,
            message: "Server error while adding popup detail"
        })
    }
})

app.get('/getLatestPopupShown', async (req, res) => {

    try {
        const {email} = req.query;
    
        if(!email){
            return res.status(200).json({
                success: false,
                message: "Email is required"
            })
        }
    
        const user = await userModel.findOne( { email: email}, {
            popupsShown: { $slice: -1 }
        });
    
        if(!user){
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
    
        const popupDetails = user.popupsShown.length === 0 ? {} : user.popupsShown[0];
    
        return res.status(200).json({
            success: true,
            popupDetails: popupDetails,
            message: "popup details found"
        })
    } catch (error) {
        console.log("Error while fetching latest popup: ", error);
        return res.status(500).json({
            success: false,
            message: "Server error while getting latest popup detail."
        })
    }
})

app.get('/getAllPopupsShown', async (req, res) => {
    try {
        const {email} = req.query;
    
        if(!email){
            return res.status(200).json({
                success: false,
                message: "Email is required"
            })
        }
    
        const user = await userModel.findOne( { email: email} ).select( "popupsShown" );
    
        if(!user){
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
    
        return res.status(200).json({
            success: true,
            popupsShown: user.popupsShown,
            message: "popups found"
        })
    } catch (error) {
        console.log("Error while fetching all popups: ", error);
        return res.status(500).json({
            success: false,
            message: "Server error while getting all popup detail."
        })
    }
})


connect();

app.listen(4000, ()=>{
    console.log("server is started at port 4000");
})