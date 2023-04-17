import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type headerProps = {
    title: string,
    description: string,
    element?: React.ReactNode | null,
}

export const HeaderComponent : React.FC<headerProps> = ({
    title, 
    description, 
    element
}) => {
    return (
        <div>
            <Box sx={{width:"100%", height:"350px"}}>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{height:"100%"}}
                >
                    <Grid item>
                        <Grid 
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{height:"100%"}}
                        >
                            <Grid item>
                                <Typography variant="h1">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item sx={{mt:2}}>
                                <Typography>
                                    {description}
                                </Typography>
                            </Grid>
                            {element !== undefined && (
                                <Grid item sx={{mt:4}}>
                                    {element}
                                </Grid>
                            )}
                        </Grid>

                    </Grid>

                    
                </Grid>
            </Box>
            <Divider/>
        </div>
    )
}