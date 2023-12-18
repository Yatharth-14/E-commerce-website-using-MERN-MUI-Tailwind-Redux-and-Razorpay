import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Link from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} md={3} sm={6}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blogs
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Press
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" items xs={12}>
            <Typography variant="body2" component='p' align='center'>
                &copy; 2023 My Company. All rights reserved.
            </Typography>
            <Typography variant="body2" component='p' align='center'>
                Made with love by Yatharth yadav
            </Typography>
            <Typography variant="body2" component='p' align='center'>
                Icons made by freepik from www.flaticon.com
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
