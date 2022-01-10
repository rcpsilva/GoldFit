import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../_assets/logo.png'
import ButtonFilled from '../../_components/button/index.js'
import './styles.css'

import Fab  from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import {Select} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
  
export default function SignUpAthlete(){

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };  

    return (
        <div className="container">
            <img className="img-logo" src={Logo} alt="logo"/>
            <div className="form">
                <section>
                    <div className="input-name">
                        <TextField color="secondary" className="text-field" id="outlined-basic" label="Nome Completo" variant="outlined" />
                    </div>
                    <div className="input-schooling"> 
                    <FormControl variant="outlined" >
                        <InputLabel id="custom-css-standard-input">Escolaridade</InputLabel>
                        <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                value={age} onChange={handleChange} label="Escolaridade">
                            <MenuItem >Ten</MenuItem>
                            <MenuItem >Twenty</MenuItem>
                            <MenuItem >Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </div>  
                </section>

                <section>
                    <div className="input-birth-date">
                        <TextField className="text-field" id="outlined-basic" label="Data de Nascimento" variant="outlined" />
                    </div>
                    <div className="input-type-scholling"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Tipo de Escola</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Tipo de Escola">
                                <MenuItem >Pública</MenuItem>
                                <MenuItem >Privada</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                </section>

                <section>
                    <div className="input-contact">
                        <TextField className="text-field" id="outlined-basic" label="Contato" variant="outlined" />
                    </div>
                    <div className="input-type-scholling"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Você já repetiu de ano?</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Você já repetiu de ano?">
                                <MenuItem >Sim</MenuItem>
                                <MenuItem >Não</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                </section>

                <section>
                <div className="input-country"> 
                        <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">País</InputLabel>
                        <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                value={age} onChange={handleChange} label="País">
                            <MenuItem >Ten</MenuItem>
                            <MenuItem >Twenty</MenuItem>
                            <MenuItem >Thirty</MenuItem>
                        </Select>
                        </FormControl>
                    </div> 
                    <div className="input-age-ategory"> 
                        <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Categoria Etária</InputLabel>
                        <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                value={age} onChange={handleChange} label="Categoria Etária">
                            <MenuItem >Ten</MenuItem>
                            <MenuItem >Twenty</MenuItem>
                            <MenuItem >Thirty</MenuItem>
                        </Select>
                        </FormControl>
                    </div> 
                </section>

                <section>
                <div className="input-state"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Estado">
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                    <div className="input-position-game"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Posição de jogo</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Posição de jogo">
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                </section>

                <section> 
                    <div className="input-city"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Cidade</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Cidade">
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                    <div className="input-institution">
                        <TextField className="text-field" id="outlined-basic" label="Instituição/Clube" variant="outlined" />
                    </div>
                </section>
                <section>
                    <div className="input-sex">
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Sexo</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Sexo">
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="input-password"> 
                        <TextField  className="text-field" id="outlined-basic" label="Senha" variant="outlined" />
                    </div>  
                </section>

                <section>
                    <div className="input-password"> 
                        <InputLabel id="demo-simple-select-outlined-label"> 
                            <input style={{ display: 'none' }} id="upload-photo"name="upload-photo" type="file" />
                            <Fab component="span" aria-label="add" variant="extended"> &nbsp;Selecionar  </Fab> 
                            Escolher uma imagem  &nbsp; 
                        </InputLabel>
                    </div>  
                    <div className="input-repeat-password"> 
                        <TextField  className="text-field" id="outlined-basic" label="Repetir senha" variant="outlined" />
                    </div>  
                </section>

            </div>
            <section>
                <div className="botao">
                    <ButtonFilled route="/" text="Cancelar"/>
                </div>

                <div className="botao">
                    <ButtonFilled route="/" text="Cadastrar"/>
                </div>
            </section>
            
        </div>
    )
}