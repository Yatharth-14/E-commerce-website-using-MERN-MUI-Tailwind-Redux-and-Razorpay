import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

export default function OrderCard() {
  return (
    <div className='p-5 shadow-md hover:shadow-2xl'>
      <Grid container spacing={2} sx={{justifyContent:'space-between'}}>

            <Grid item xs={6}>

                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://images.unsplash.com/photo-1593757147298-e064ed1419e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJ3MlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men slim mid rise jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>

            </Grid>

            <Grid item xs={2}>
                <p>&#8377;1099</p>
            </Grid>

            <Grid item xs={4}>
                {true && <div><p>
                    <AdjustIcon sx={{width:'15px', height:'15px'}} className='text-green-600 mr-2 text-sm'></AdjustIcon>
                    <span>
                        Delivered on March 03
                    </span>

                </p>
                <p className='text-xs'>
                    Your Item has been delivered
                </p>
                
                </div> }
                {false && <p>
                    <span>
                        Expected Delivery on March 03
                    </span>
                </p>}
                
            </Grid>

      </Grid>
    </div>
  )
}
