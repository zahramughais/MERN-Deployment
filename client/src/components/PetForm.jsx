import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PetForm = props => {

    const {initialName, initialType, initialDescription, initialSkills, initialError, onSubmitProp} = props

    const [name, setName] = useState(initialName)
    const [type, setType] = useState(initialType)
    const [description, setDescription] = useState(initialDescription)
    const [sOne, setSOne] = useState(initialSkills[0])
    const [sTwo, setSTwo] = useState(initialSkills[1])
    const [sThree, setSThree] = useState(initialSkills[2])
    const [skills, setSkills] = useState(initialSkills)

    const handleSubmit = e => {
        e.preventDefault()
        setSkills([sOne, sTwo, sThree])
        onSubmitProp({name, type, description, skills})
    }

    return (
        <form onSubmit={handleSubmit}>
            {initialError.map((err, index) => <p key={index}>{err}</p>)}
            <div>
                <label>Pet Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Pet Type:</label>
                <input type="text" value={type} onChange={(e) => setType(e.target.value)}/>
                <label>Pet Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <p>Skills (optional):</p>
                <label>Skill 1:</label>
                <input type="text" value={sOne} onChange={(e) => {
                    setSOne(e.target.value)
                    setSkills([sOne, sTwo, sThree])
                }}/>
                <label>Skill 2:</label>
                <input type="text" value={sTwo} onChange={(e) => {
                    setSTwo(e.target.value)
                    setSkills([sOne, sTwo, sThree])
                }}/>
                <label>Skill 3:</label>
                <input type="text" value={sThree} onChange={(e) => {
                    setSThree(e.target.value)
                    setSkills([sOne, sTwo, sThree])
                }}/>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default PetForm