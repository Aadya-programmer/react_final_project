import { Header } from "../Reusable/Header"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export function Homepage(){
  return (
  <div>
    <div className="reader-den">
    <Header/>
    <div className="btn">
    <Stack spacing={2} direction="row">
      <Button variant="contained" style={{backgroundColor:"grey"}}>Read Now</Button>
    </Stack>
    </div>
  </div>
  <div className="total-readers">
    
  </div>
  </div>
  
  );
}