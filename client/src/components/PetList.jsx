import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PetList = props => {

    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(res => setPets(res.data))
            .catch(err => console.error(err))
    }, [pets])
    return (
        <>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
            {pets.length > 0 && pets.sort((a, b) => a.type.localeCompare(b.type)).map((pet, i) => {
                return (
                <tr key={i}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td><Link to={'/pets/'+pet._id}>details</Link> | <Link to={'/pets/'+pet._id+'/edit'}>edit</Link></td>
                </tr>
                )
            })}
            </tbody>
        </table>
        </>
    )
}

export default PetList