import axios from 'axios';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import PetForm from '../components/PetForm';

const New = props => {

    const history = useHistory()
    const [errors, setErrors] = useState([])

    const createPet = newPet => {
        axios.post('http://localhost:8000/api/pets/new', newPet)
        .then(res => history.push('/'))
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }

    return (
        <>
        <div>
        <h1>Pet Shelter</h1>
        <Link to='/'>back to home</Link>
        </div>
        <p>Know a pet needing home?</p>
        <PetForm onSubmitProp={createPet} initialError={errors} initialSkills={['', '', '']}/>
        </>
    )
}

export default New