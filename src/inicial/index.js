import 'date-fns';
import React, { useState } from "react";
import { Container, FormControl, InputLabel, Select, MenuItem, Grid, TextField, Button,} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider, KeyboardDatePicker,} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #b100e0 30%, #e37aff 90%)',    
    button: {
      margin: theme.spacing(1),      
    },
      maxWidth:'sm', 
    
  },

  formControl: {
    minWidth: 120,
    
  }
}));

export const Inicio = (props) => {
  const classes = useStyles();
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [classe, setClasse] = useState("");

 

  const changeOrigem = (e) => {
    setOrigem(e.target.value);
  };

  const changeDestino = (e) => {
    setDestino(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const changeClasse = (e) => {
    setClasse(e.target.value);
  };

  

  const locais = [
    { id: 1, nome: "Aeroporto de Guarulhos - SP" },
    { id: 2, nome: "Aeroporto de Divinópolis - MG" },
    { id: 3, nome: "Aeroporto Aeroclube do Espirito Santo - ES" },
    { id: 4, nome: "Aeroporto de Brasilia" },
  ];
  
  const vooClasses = [
    { id: 1, nome: "Econômica" },
    { id: 2, nome: "Primera" },
    { id: 3, nome: "Executiva" },
  ];

  return (
    <div className={classes.root}>
    <Container maxWidth="sm">
     
      <Grid container spacing={3}>
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

        <Grid container spacing={3}>
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

  
       <Grid container spacing={1}>
          <Grid item xs={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
               disableToolbar
               variant="inline"
               format="dd/MM/yyyy"
               margin="normal"
               id="Data Ida"
               label="Data Ida"
               value={selectedDate}
               onChange={handleDateChange}
               KeyboardButtonProps={{
                   'aria-label': 'change date',
              }}
            />
            </MuiPickersUtilsProvider>
          </Grid>
        

        
          <Grid item xs={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
               disableToolbar
               variant="inline"
               format="dd/MM/yyyy"
               margin="normal"
               id="Data Volta"
               label="Data Volta"
               value={selectedDate}
               onChange={handleDateChange}
               KeyboardButtonProps={{
                   'aria-label': 'change date',
              }}
            />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <TextField
              id="qtdPassageiros"
              label="Qtd. Passageiros"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={8}>
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

        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Button variant="contained" color="primary"   className={classes.button}        endIcon={<SearchIcon />}>
              Buscar
            </Button>
          </Grid>
        </Grid>
    </Container>
    </div >
  );
};