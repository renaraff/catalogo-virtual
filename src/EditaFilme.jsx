import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditaFilme() {

    const { id } = useParams();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [editar, setEditar] = useState("");
    const [erro, setErro] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND + "filmes/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then((resposta) => resposta.json())
            .then((json) => {
                if (!json.status) {
                    setTitulo(json.titulo);
                    setDescricao(json.descricao);
                    setAno(json.ano);
                    setDuracao(json.duracao);
                    setCategoria(json.categoria);
                    setImagem(json.imagem);
                } else {
                    setErro("Filme não encontrado");
                }
            })
            .catch((erro) => { setErro(true) })

    }, []);

    function Editar(evento) {
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + "filmes", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    categoria: categoria,
                    imagem: imagem
                }
            )
        })
            .then((resposta) => resposta.json())
            .then((json) => {
                if (json._id) {
                    setEditar(true);
                    setErro(false);
                } else {
                    setErro("Não foi possível processar sua requisição");
                    setEditar(false);
                }
            })
            .catch((erro) => { setErro(true) })

    }



    return (
        <Container component="section" maxWidth="sm">
            <Box sx={{
                mt: 5,
                background: "#dce0e6",
                padding: "30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                
                {erro && (<Alert severity="warning">{erro}</Alert>)}
                {editar && (<Alert severity="success">Filme editado com sucesso!!</Alert>)}
                <Box component="form" onSubmit={Editar}>
                    <TextField
                        type="text"
                        label="Título"
                        variant="filled"
                        margin="normal"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="Descrição"
                        variant="filled"
                        margin="normal"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="number"
                        label="Ano"
                        variant="filled"
                        margin="normal"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="number"
                        label="Duração"
                        variant="filled"
                        margin="normal"
                        value={duracao}
                        onChange={(e) => setDuracao(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="Categoria"
                        variant="filled"
                        margin="normal"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        label="Url da imagem"
                        variant="filled"
                        margin="normal"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 2, mb: 2 }}>Editar</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default EditaFilme;