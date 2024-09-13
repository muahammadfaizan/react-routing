import { Box, Typography } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MediaCard from "../component/Card"

const Products = () => {
  
  const [data,setData] = useState([]);
  
  useEffect(()=>{
  axios('https://dummyjson.com/products')
   .then(res => {
   console.log(res.data.products);
   setData(res.data.products);
      
  }) 
  .catch(err => {
  console.log(err);
})
}, []);
  
 
return (
    <>
   <Typography className='text-center mt-4 mb-5' variant='h4'>
    Products
    </Typography>
    <Box className="d-flex justify-content-center gap-5 mb-5 align-items-center flex-wrap">
    {data.length > 0 ? 
    (data.map((item)=>{
    return <MediaCard key={item.id} item={item} image={item.images[0]} id={item.id} title={item.title} description={item.description} />
    }))
    : <p>loading...</p>}
    </Box>
  </>
  )
}

export default Products