import { Alert, Box, Button, Card, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCatalogo from './Menu'


function Login() {

  const [ email, setEmail ] = useState( "" );
  const [ senha, setSenha ] = useState( "" );
  const [ lembrar, setLembrar ] = useState( false );
  const [ login, setLogin ] = useState( false );
  const [ erro, setErro ] = useState( false );
  const navigate = useNavigate();

  useEffect( () => {

    if( login ) {
        setEmail( "" );
        setSenha( "" );
        navigate( "/" );
    }

  }, [ login ] );

  function Autenticar( evento )
  {
    evento.preventDefault();
    fetch(  process.env.REACT_APP_BACKEND + "login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
                senha: senha
            }
        )
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => {

        if( json.user ) {
            localStorage.setItem( "usuario" , JSON.stringify( json.user._id ) );
            setLogin( true );

        } else {
            localStorage.removeItem( "usuario" );
            setErro( true );
        }
    } )
    .catch( ( erro ) => {  setErro( true ) } )
    
  }

  return (
    <>
    <MenuCatalogo></MenuCatalogo>
    <Container component="section" maxWidth="xs" >
        <Card 
        sx={{ 
            mt: 10,
            backgroundColor: "#f0f0f0",
            padding: "30px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
        >
            <Typography component="h1" variant='h4'  sx={{ color: "#f12598" }}>Entrar</Typography>
            { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }}>Revise seus dados e tente novamente</Alert> ) }
            <Box component="form" onSubmit={Autenticar}>
                <TextField 
                  type="email"
                  label="Email" 
                  variant="filled" 
                  margin="normal"
                  value={email}
                  onChange={ (e) => setEmail( e.target.value ) }
                  fullWidth
                />
                <TextField 
                  type="password" 
                  label="Senha" 
                  variant="filled" 
                  margin="normal" 
                  fullWidth
                  value={senha}
                  onChange={ (e) => setSenha( e.target.value ) }
                />
                <FormControlLabel
                    control={ <Checkbox value={lembrar} name="lembrar" onChange={(e) => setLembrar( !lembrar ) } />}
                    label="Lembrar-me"
                />
                <Button type="submit" variant="contained" fullWidth sx={ { mt: 2, mb: 2 }} size="large">Login</Button>
                <Grid container>
                    <Grid item xs>
                        Esqueci a senha
                    </Grid>
                    <Grid item>
                        <a href='http://localhost:3000/cadastro'>Cadastrar</a>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    </Container>
    </>
  )
}

export default Login;