import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Adopt from '../components/Adopt';

const Details = props => {
    
    const [pet, setPet] = useState({})
    const [skills, setSkills] = useState([])
    const { id } = useParams();
    const [like, setLike] = useState(0)
    const [isLiked, setIsLiked] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/get/' + id)
            .then(res => {
                setPet(res.data)
                setSkills(res.data.skills)
            })
            .catch(err => console.error(err));
    }, [pet]);

    
    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to='/'>back to home</Link>
            </div>
            <div>
                <p>Details about {pet.name}</p>
                <Adopt petId={pet._id} />
            </div>
            <div>
                <p>Pet type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p>Skills:</p>
                <p>{skills[0]}</p>
                <p>{skills[1]}</p>
                <p>{skills[2]}</p>
            </div>
            <button disabled={isLiked} onClick={(e) => {
                setLike(like+1)
                setIsLiked(true)
                }}>Like Garfield</button>
            <p>{like} like(s)</p>
        </div>
    )
}

export default Details