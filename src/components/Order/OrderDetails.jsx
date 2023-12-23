import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function OrderDetails() {
  return (
    <div className=" px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard></AddressCard>
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3}></OrderTracker>
      </div>

      <Grid container className="space-x-5">
        {[1,1,1,1,1].map((item)=><Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:'center',justifyContent:'space-between'}}>
            <Grid item xs={6}>
                <div className="flex items-center space-x-4">
                    <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://images.unsplash.com/photo-1593757147298-e064ed1419e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJ3MlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

                    <div className="space-y-2 ml-5 ">
                        <p className="font-semibold">Men Slim Mid Rise Shirt</p>
                        <p className="space-x-5 opacity-50 text-xs font-semibold"> <span>Color: pink</span> <span>Size: M</span></p>
                        <p>Seller: Linaraia</p>
                        <p>&#8377;1099</p>
                    </div>
                </div>
            </Grid>

            <Grid item >
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:'2rem'}} className="px-2 text-5xl"> 
                    </StarBorderIcon>
                    <span>Rate & Review Product</span>
                </Box>
            </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
}
