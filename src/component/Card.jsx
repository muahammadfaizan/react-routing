// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({image , title , description , id , price}) {
  
    const navigate = useNavigate()

    const addBtn = () => {
       console.log();
       navigate(`/SingleProduct/${id}`)
    }
  
    return (
    <Card className='flex justify-content-center' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {image}
        alt = "green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography>{price}</Typography>
      </CardContent>
      <CardActions>
        <Button className='btn btn-primary' size="small" onClick={addBtn}>Add</Button>
      </CardActions>
    </Card>
  );
}
