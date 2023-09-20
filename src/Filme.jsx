import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";



function Filme(props) {

    return (
        <Card sx={{ maxWidth: 400, mt:3, ml:9, mb:1.5, borderRadius:2,  background: "#f0f0f0ad"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.imagem}
                    alt={props.titulo}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.descricao}
                    </Typography>
                    <Grid container>
                        <Grid item xs={2} mr={5}>
                            <span>{props.categoria}</span>
                        </Grid>
                        <Grid item xs={2} ml={9}>
                            <span>{props.ano}</span>
                        </Grid>
                        <Grid item xs ml={6}>
                            <span>{props.duracao}</span>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Grid container>
                <Grid item xs={6} ml={3} mb={2}>
                    <button onClick={props.excluir}>⠀x⠀</button>
                </Grid>
                <Grid item xs={2} ml={10}  mb={2}>
                    <Link href={ "edicao/" + props.id }>Editar</Link>
                </Grid>
            </Grid>
            
            
        </Card>
    )
}
export default Filme;