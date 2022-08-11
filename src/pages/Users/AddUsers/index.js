import {useState} from "react";
import {Button,TextField} from '@mui/material';

export default function AddUser(){
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');
    const [tipouser, setTipoUser]= useState('');

    const handleName = (event) =>{
        setName(event.target.value);
        console.log(handleName);
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handleSenha = (event) =>{
        setSenha(event.target.value);
    }
    const handleTipoUsers = (event) =>{
        setTipoUser(event.target.value);
    }
    const save = () => {
        fetch('http://localhost:9000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:name,
                email:email,
                password:senha,
                profile:tipouser
            })
        });
        alert('Pronto');
    }


    return(
        <>
            <h1 align="center">- Novo Usuario -</h1>
           <form>
            <TextField onChange={handleName}  label="Nome" fullWidth />
            <TextField onChange={handleEmail} label="Email" fullWidth/>
            <TextField onChange={handleSenha} label="Senha" fullWidth/>
            <TextField onChange={handleTipoUsers} label="Tipo Usuario" fullWidth/>
            <Button onClick={save} fullWidth variant="contained">Salvar</Button>
            </form>
        </>
    );
}