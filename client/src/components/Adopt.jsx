import React, { useCallback } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Adopt = props => {

    const {petId} = props;
    const history = useHistory()

    const removePet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/delete/'+props.petId)
        .then(res=>{
            history.push('/')
        })
        .catch(err => console.error(err))
    }

    return (
        <>
            <button onClick={removePet}>Adopt Garfield</button>
        </>
    )
}

export default Adopt