import React, {useState} from 'react';
import Container from "../Components/Container.jsx";
import Input from "../Components/UI/Input.jsx";
import Button from "../Components/UI/Button.jsx";
import axios from '../axios.js'
import {useNavigate} from "react-router-dom";
import Title from "../Components/UI/Title.jsx";
import styles from '../styles/SubmitForm.module.scss'

const AddUser = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const phoneReg = /^\+?3?8?(0[5-9][0-9]\d{7})$/
    const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const saveUser = async () => {
        try {

            if (emailReg.test(email) && phoneReg.test(phoneNumber) && firstName !== '' && lastName !== '') {
                const user = await axios.post('/user', {
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                })

                return user
            }



        } catch (err) {
            alert('User already exist')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await saveUser()
        if (user) {
            alert("user created")
            navigate('/')
        } else {
            alert("invalid data")
        }
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