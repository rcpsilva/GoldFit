import React from 'react'
import { Link } from 'react-router-dom'

import ButtonFilledCancel from '../../_components/button-cancel/index.js'
import ButtonFilled from '../../_components/button/index.js'

import TextField from '@material-ui/core/TextField';
import {Select} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import './styles.css'

export default function EvaluateAthlete1 (){

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <div className="box">
            <p className="text-title"> Avaliação Antropométrica e Fisicomotora</p>

            <div className="form-evaluate">
                <section className="first-part">
                    <ButtonFilled className="btn-login" route="/home" text="Novo"/>
                    <div className="input-deficiency"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="custom-css-standard-input">Atleta</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    /*value={age}*/ onChange={handleChange} label="Possui alguma deficiência?">
                                <MenuItem >Sim</MenuItem>
                                <MenuItem >Não</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                </section>

                <section className="second-part">
                    <div>
                        <p>Massa corporal</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <p>Estatura</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <p>Altura sentado</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <p>Envergadura</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <p>DC tricipital</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <p>DC perna</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </div>
                </section>

                <div className="third-part">
                    <section className="attemps">  
                        <p className="text-attemps">Tentativa 1</p>
                        <p className="text-attemps">Tentativa 2</p> 
                        <p className="text-attemps">Tentativa 3</p>
                    </section>
                    <section>
                        <p className="texto">Flexibilidade</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </section>

                    <section>
                        <p className="texto">Preensão Manual</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </section>

                    <section>
                        <p className="texto">Salto Vertical</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </section>

                    <section>
                        <p className="texto">Velocidade 10m</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </section>
                    
                    <section>
                        <p className="texto">Velocidade 20m</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        
                    </section>

                    <section>
                        <p className="texto">Agilidade</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </section>

                    <section>
                        <p className="texto">Drible</p>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div className="input-which">
                            <TextField className="texto" id="outlined-basic" label="" variant="outlined" />
                        </div>
                        <div>

                        </div>
                    </section>
                </div>
            </div>
                <br></br>
                <ButtonFilled route="/" text="Salvar"/>
                <br></br>
                <ButtonFilled route="/" text="Próxima"/>
                <br></br>
                <ButtonFilledCancel route="/" text="Cancelar"/>
                <br></br><br></br>
        </div>
    )
}