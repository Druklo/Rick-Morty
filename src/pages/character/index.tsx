import React from 'react';
import { characters } from '../../api/characters';
import { useParams } from 'react-router-dom';
import { ICharacter } from './interface/character.interface';
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';

const CharacterPage: React.FC = () => {
    const {id} = useParams();

    const [loading, setLoading] = React.useState<Boolean>(true);
    const [character, setCharacter] = React.useState<ICharacter | null>();

    React.useEffect(()=> {
        characters
            .getById({id})
            .then((resp) => {
                setCharacter(resp.data)
                setLoading(false)
            })
            .catch((err) => console.error(err))
    },[])

        return(
            <Box sx={{width:"100%"}}>
                <Container maxWidth="xl">
                    {
                        loading? (
                            <Box sx={{display:"flex", justifyContent: "center", mt:4}}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Grid container sx={{mt:2}} columnSpacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant='h2'>
                                        {character!.name}
                                    </Typography>
                                    <Divider/>
                                    <Typography variant='h6'>
                                        {character?.origin.name}
                                    </Typography>
                                    <Box>
                                        <Chip label={character?.status} variant="outlined" color='primary' />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <img 
                                        src={character!.image} 
                                        style={{width:"100%", borderRadius:"0.5em"}}  
                                    />
                                </Grid>
                            </Grid>

                        )}
                </Container>
            </Box>
        )
}

export default CharacterPage;