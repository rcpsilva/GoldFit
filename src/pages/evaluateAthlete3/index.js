import React from 'react'
import { Link } from 'react-router-dom'

import ButtonFilledCancel from '../../_components/button-cancel/index.js'
import ButtonFilled from '../../_components/button/index.js'

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

import {Select} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import './styles.css'

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


export default function EvaluateAthlete3 (){

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <div className="box">
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
            <p className="text-title"> Aspectos Intangíveis do Potencial Esportivo</p>
            <p >Avalie o seu atleta de acordo com as características abaixo:</p>
            <section className="container-box">
                <div className="container-left">
                    <div className="internal">
                        <InputLabel><b>1 - Avalie o potencial esportivo deste atleta para desempenho esportivo no FUTURO:</b></InputLabel>
                        <div className="options">
                            <InputLabel style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>
                </div>
                </div>
            </section>
            <ButtonFilled route="/" text="Pŕoximo"/>
            <br></br>
            <ButtonFilledCancel route="/" text="Cancelar"/>
            <br></br><br></br>
        </div>
    )
}