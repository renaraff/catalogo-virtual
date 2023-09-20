import { Alert, Box, Button, Card, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import MenuCatalogo from './Menu'
import Style from "./menu.module.css"

function Filmes() {
        const [titulo, setTitulo] = useState( "" );
        const [descricao, setDescricao] = useState( "" );
        const [ano, setAno] = useState( "" );
        const [duracao, setDuracao] = useState( "" );
        const [categoria, setCategoria] = useState( "" );
        const [imagem, setImagem] = useState( "" );
        const[ cadastro, setCadastro ] = useState( "" );
        const [ erro, setErro ] = useState( false );



    function CadastrarFilme(evento){
        evento.preventDefault();

    fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    categoria: categoria,
                    imagem: imagem,
                    usuario:localStorage.getItem( "usuario" )
                }
                )
            } )
            .then( (resposta) => resposta.json() )
            .then( (json) => {
    
                if( json.titulo ){
                    setCadastro( true );
                    setErro( false );
                } else{
                    setErro( true );
                    setCadastro( false );
                }
            } )
            .catch( (erro) => { setErro( true ) })
    }
    
     

  return (
    <>
    <MenuCatalogo></MenuCatalogo>
   <Container component="section" maxWidth="sm">
    <Card sx={{
                mt:1,
                background: "#f0f0f0",
                padding: "30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb:0.5
            }}>
                <Typography component="h1" variant='h4' sx={{ color: "#f12598" }}>Filmes da Greta Gerwig</Typography>
            { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }}>Desculpe tente novamente, por favor.</Alert>)}
            {cadastro && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }}>Obrigada por cadastrar o filme.</Alert>)}
                <Box component="form" onSubmit={CadastrarFilme}>
                <TextField
                type="text" 
                label="Título" 
                variant="filled" 
                margin="normal"
                value={titulo}
                onChange={ (e) => setTitulo( e.target.value )}
                fullWidth
                required
                />
                <TextField
                type="text" 
                label="Atriz Principal" 
                variant="filled" 
                margin="normal"
                value={descricao}
                onChange={ (e) => setDescricao( e.target.value )}
                fullWidth
                required
                />
                <TextField
                type="text" 
                label="Review do filme" 
                variant="filled" 
                margin="normal"
                value={ano}
                onChange={ (e) => setAno( e.target.value )}
                fullWidth
                />
                <TextField
                type="text" 
                label="Duração" 
                variant="filled" 
                margin="normal"
                value={duracao}
                onChange={ (e) => setDuracao( e.target.value )}
                fullWidth
                required
                />
                <TextField
                type="text" 
                label="Categoria" 
                variant="filled" 
                margin="normal"
                value={categoria}
                onChange={ (e) => setCategoria( e.target.value )}
                fullWidth
                required
                />
                <TextField
                type="text" 
                label="Url da Imagem" 
                variant="filled" 
                margin="normal"
                value={imagem}
                onChange={ (e) => setImagem( e.target.value )}
                fullWidth
                required
                />
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2} }>Cadastrar filme</Button>
            </Box>

    </Card>
   </Container>
   </>
  )
}

export default Filmes;