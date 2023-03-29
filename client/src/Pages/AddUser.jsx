import React, {useState} from 'react';
import Container from "../Components/Container.jsx";
import Input from "../Components/UI/Input.jsx";
import Button from "../Components/UI/Button.jsx";
import axios from '../axios.js'
import {Navigate, useNavigate} from "react-router-dom";
import Title from "../Components/UI/Title.jsx";
import styles from '../styles/SubmitForm.module.scss'

const AddUser = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const saveUser = async () => {
        try {
            const user = await axios.post('/user', {
                firstName,
                lastName,
                email,
                phoneNumber,
            })
            console.log(user)
        } catch (err) {
            alert('User already exist')
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await saveUser()
        alert("user created")
        navigate('/')
    }

    return (
        <div className={styles.submitForm}>
            <Container>
                <Title>Add user</Title>
                <form onSubmit={handleSubmit}>
                    <Input
                        type={"text"}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={"First name"}/>
                    <Input
                        type={"text"}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={"Last name"}/>
                    <Input
                        type={"email"}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Email"}/>
                    <Input
                        type={"text"}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={"Phone number"}/>
                    <Button type={"submit"}>Save</Button>

                </form>
            </Container>
        </div>
    );
};

export default AddUser;