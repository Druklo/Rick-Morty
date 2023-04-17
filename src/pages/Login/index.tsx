import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { NavBar } from "../../common/NavBar";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type LoginType = {
    username: string,
    password: string
}

const LoginPage : React.FC<{}> = () => {
    const {getError, getSuccess} = useNotification();
    // const [loginData, setLoginData] = React.useState<LoginType>({
    //     username: "",
    //     password: ""
    // })

    // const dataLogin = (event : React.ChangeEvent<HTMLInputElement>)=>{
    //     setLoginData({...loginData,[event.target.name]:event.target.value})
    // }

    // const handleSubmit =(event : React.FormEvent<HTMLInputElement>)=>{
    //     event.preventDefault()
    //     LoginValidate.validate(loginData).then(()=>{
    //     getSuccess(JSON.stringify(loginData));
    // }).catch((error)=>{
    //     getError(error.message)
    // })
    // }

    const formik = useFormik<LoginType>({
        initialValues: {
          username: '',
          password: '',
        },
        validationSchema: LoginValidate,
        onSubmit: (values: LoginType) => {
            getSuccess(JSON.stringify(values));
        },
      });

    return(
        <>
        <NavBar />
        <Container sx={{mt:20}} maxWidth="sm">
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight:"100 vh"}}
            >
                <Grid item>
                    <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
                        <Typography 
                            sx={{mt:1, mb:1}} 
                            variant="h4"
                        >
                            Iniciar Sesión
                        </Typography>
                        <Box component="form" onSubmit={formik.handleSubmit}>
                            <TextField 
                                name="username"
                                type="text"
                                margin="normal"
                                fullWidth 
                                label="Email" 
                                sx={{mt:2, mb:1.5}} 
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                            />
                            <TextField 
                                name="password"
                                type="password"
                                margin="normal"
                                fullWidth 
                                label="Password" 
                                sx={{mt:1.5, mb:1.5}} 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button 
                                fullWidth 
                                type="submit"
                                variant="contained"
                                sx={{mt:1.5, mb:3}}
                            > 
                                Iniciar Sesión
                            </Button>
                        </Box>

                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default LoginPage;