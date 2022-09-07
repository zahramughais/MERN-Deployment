import React from 'react'
import PetList from '../components/PetList'
import { Link } from 'react-router-dom';

const Main = props => {
    return (
        <>
        <div>
        <h1>Pet Shelter</h1>
        <Link to='/pets/new'>Add a pet to the shelter</Link>
        </div>
        <p>These pets are looking for a good home</p>
        <PetList />
        </>
    )
}

export default Main