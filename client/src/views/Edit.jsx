import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import PetForm from '../components/PetForm';

const Edit = props => {

    const history = useHistory()
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/get/' + id)
            .then(res => {
                setPet(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err));
    }, [pet]);

    const updatePet = updatedP => {
        axios.put('http://localhost:8000/api/pets/edit/'+id, updatedP)
        .then(res => history.push('/'))
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errorArr = []
            console.log(errorResponse)
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
        <p>Edit Garfield</p>
        {loaded && (<PetForm initialError={errors} onSubmitProp={updatePet} initialName={pet.name} 
        initialType={pet.type} initialDescription={pet.description} initialSkills={pet.skills}/>)}
        </>
    )
}

export default Edit