import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import MediaCard from "./../component/Card";
import { useState ,useEffect } from "react";
import axios from "axios";

function SingleProduct(){
          
  const { id } = useParams()
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios(`https://dummyjson.com/products/${id}`)
    .then((res) => {
        console.log(res.data.products);
        setData(res.data.products)
    }).catch((err) => {
        console.log(err);    
    })
} , [])

    return(
    <>
      <Typography>Product list</Typography>
      
      {<Box>
        <MediaCard image={data.images[0]} id={data.id} title={data.title}  description={data.description} price={data.price}  />
      </Box>}

    </>
    )
}



export default SingleProduct