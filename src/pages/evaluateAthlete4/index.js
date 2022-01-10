import React from 'react'
import { Link } from 'react-router-dom'

import ButtonFilledCancel from '../../_components/button-cancel/index.js'
import ButtonFilled from '../../_components/button/index.js'

import TextField from '@material-ui/core/TextField';
import {Select} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';


import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

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


export default function EvaluateAthlete4 (){

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <div className="box">
            <p className="text-title"> Aspectos Intangíveis do Potencial Esportivo</p>
            <p >Avalie o seu atleta de acordo com as características abaixo:</p>
            <section className="container-box">
                <div className="container-left">
                    <div className="internal">
                        <InputLabel><b>1 - Compensa suas deficiências pela sua grande determinação</b></InputLabel>
                        <div className="options">
                            <InputLabel style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>2 - Influencia positivamente a equipe/grupo</b></InputLabel>
                        <div className="options">
                            <InputLabel  style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>3 - Conhece os atalhos para a vitória</b></InputLabel>
                        <div className="options">
                            <InputLabel  style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>4 - É um atleta que decide as partidas/competições</b></InputLabel>
                        <div className="options">
                            <InputLabel  style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>5 - Extrai o melhor do (s) companheiro (s)</b></InputLabel>
                        <div className="options">
                            <InputLabel  style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>
                    </div>
                </div>

                <div className="container-right">
                    <div className="internal">
                        <InputLabel><b>6 - Antecipa-se às situações</b></InputLabel>
                        <div className="options">
                            <InputLabel style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>7 - É treinável</b></InputLabel>
                        <div className="options">
                            <InputLabel style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>8 - Tem capacidade de adaptação às situações</b></InputLabel>
                        <div className="options">
                            <InputLabel style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>9 - Melhora a cada vez que é submetido a novas exigências/desafios</b></InputLabel>
                        <div className="options">
                            <InputLabel style={{marginBottom:'3%'}}> Fraco<GreenRadio checked={selectedValue === 'Fraco'} onChange={handleChange} value="Fraco" name="radio-button-demo" inputProps={{ 'aria-label': 'Fraco' }}/> </InputLabel>
                            <InputLabel> Razoável<GreenRadio checked={selectedValue === 'Razoável'} onChange={handleChange} value="Razoável" name="radio-button-demo" inputProps={{ 'aria-label': 'Razoável' }}/> </InputLabel>
                            <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }}/> </InputLabel>
                            <InputLabel> Muito Bom<GreenRadio checked={selectedValue === 'Muito Bom'} onChange={handleChange} value="Muito Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Muito Bom' }}/> </InputLabel>
                            <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }}/> </InputLabel>
                        </div>

                        <InputLabel><b>10 - Possui “fome de vitória”, “instinto matador”</b></InputLabel>
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
            <ButtonFilled route="/" text="Salvar"/>
            <br></br>
            <ButtonFilledCancel route="/" text="Voltar"/>
            <br></br>
            <ButtonFilledCancel route="/" text="Cancelar"/>
            <br></br><br></br>
        </div>
    )
}