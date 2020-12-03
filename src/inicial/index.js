import 'date-fns';
import React, { useState, useEffect } from "react";
import { Container, FormControl, InputLabel, Select, MenuItem, Grid, TextField, Button, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #40E0D0 30%, #7FFFD4 90%)',
    button: {
      margin: theme.spacing(1),
    },
    width: "100%",   
    color: "#4f40b3",    
    margin:'auto',
    webkitBoxShadow: " 3px 6px 20px 1px rgba(0,0,0,0.75)",
    mozBoxShadow: " 3px 6px 20px 1px rgba(0,0,0,0.75)",
    boxShadow: "3px 6px 20px 1px rgba(0,0,0,0.75)",
    fontFamily:"roboto",    
  },

  button:{
    marginLeft:"6%",
    width:"100%",
  },

  datas:{
    
    justifyContent:'center',
    marginRight:"5%",
    marginBottom:"2%",
    width:"100%",
    
  },

  formControl: {
    minWidth: "192px",
  },

  IdaVolta:{
    marginLeft:"9%",
    marginBottom:"2%",
  },

  textField:{
   width:"100%",
  },

  passageiros:{
    marginLeft:"8%",
    width:"100%",
   },

  tittle:{
    textAlign:'center',
  },
  
}));

export const Inicio = (props) => {
  const classes = useStyles();
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");  
  const [classe, setClasse] = useState("");
  const [locais, setLocais] = useState([]);

 
  useEffect(() => {
    //recebe a URL da api como parametro
    axios.get('https://localhost:44399/api/Local')
      .then(resultado => setLocais(resultado.data))// status 200 ok
      .catch(erro => console.log(erro) ) //status 500 ou 400.
  }, []);

  const changeOrigem = (e) => {
    setOrigem(e.target.value);
  };

  const changeDestino = (e) => {
    setDestino(e.target.value);
  };

  const changeClasse = (e) => {
    setClasse(e.target.value);
  };

  /*const locais = [
    { id: 1, nome: "Aeroporto de Guarulhos - SP" },
    { id: 2, nome: "Aeroporto de Divinópolis - MG" },
    { id: 3, nome: "Aeroporto Aeroclube do Espirito Santo - ES" },
    { id: 4, nome: "Aeroporto de Brasilia" },
  ];*/

  const vooClasses = [
    { id: 1, nome: "Econômica" },
    { id: 2, nome: "Primera" },
    { id: 3, nome: "Executiva" },
  ];

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <h1 className={classes.tittle} > {"Aeroporto API"}</h1>
        <Grid  className={classes.IdaVolta} container spacing={3}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="origem">Origem</InputLabel >
              <Select
                labelId="origem"
                id="origem"
                value={origem}
                onChange={changeOrigem}
              >
                {locais.map((item) => (
                  <MenuItem value={item.id}>{item.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid className={classes.IdaVolta} container spacing={3}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="destino">Destino</InputLabel>
              <Select
                labelId="destino"
                id="destino"
                value={destino}
                onChange={changeDestino}
              >
                {locais.map((item) => (
                  <MenuItem value={item.id}>{item.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>


        <Grid className={classes.datas} container spacing={2}>
          <Grid item xs={4.5}>
            <form className={classes.datas} noValidate>
              <TextField
                id="date"
                label="Data Ida"
                type="date"
                defaultValue="" 
                className={classes.textField}              
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>



          <Grid item xs={4.5}>
          <form className={classes.datas} noValidate>
              <TextField
                id="date"
                label="Data Volta"
                type="date"
                defaultValue="" 
                className={classes.textField}              
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
        </Grid>

        <Grid  className={classes.passageiros} container spacing={3}>
          <Grid item xs={5}>
            <TextField
              id="qtdPassageiros"
              label="Qtd. Passageiros"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="classe">Classe</InputLabel>
              <Select
                label="Classe"
                id="classe"
                value={classe}
                onChange={changeClasse}
              >
                {vooClasses.map((item) => (
                  <MenuItem value={item.id}>{item.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid className={classes.button} container spacing={5}>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" className={classes.button} endIcon={<SearchIcon />}>
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
};