import { 
        Button, 
        Card, CardActions, 
        CardContent, 
        CardMedia, 
        Divider, 
        Typography 
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cart.slice";
import { setItem } from "../../utils/localStorage";

type CardProps = {
    image: string,
    name: string,
    species: string,
    status: string,
    id: number
}

export const CardComponent: React.FC<CardProps> = ({
    image, 
    name, 
    species,
    status,
    id
}) => {
    let navigate = useNavigate()
    const [disableBtn, setDisableBtn] = React.useState<boolean>(false)
    const dispach = useAppDispatch()
    const itemExist = useAppSelector((state)=> state.cartReducer)
    React.useEffect(()=>{
        setDisableBtn(itemExist.some((item)=> item.id ===id));
        setItem('cart', itemExist)
    },[itemExist, id])

    const handleAddToCart = () =>{
        dispach(addToCart({
            id,
            name,
            image,
            info: status
        }))
    } 

    return(
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish" 
            />
            <CardContent>
                <Typography sx={{mb:1.5}} variant="h4">
                    {name}
                </Typography>
                <Divider/>
                <Typography sx={{mt:1.5}}>
                    Especie: {species}
                </Typography>
                <Typography sx={{mt:1.5}}>
                    Estado: {status}
                </Typography>
                <CardActions>
                    <Button 
                        fullWidth 
                        variant="contained" 
                        size="small"
                        onClick={()=>navigate(`character/${id}`)}
                    > 
                        See More
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        disabled={disableBtn}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}


