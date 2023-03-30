import React, {useState} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import Title from "../Components/UI/Title.jsx";
import Input from "../Components/UI/Input.jsx";
import Button from "../Components/UI/Button.jsx";
import styles from '../styles/SubmitForm.module.scss'
import axios from "../axios.js";

const AddEvent = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    console.log(startDate)

    const saveEvent = async () => {
        try {
            const config = {
                headers: {userid: params.id}
            }

            const event = await axios.post('/event', {
                title,
                description,
                startDate: startDate.replace('-', '/'),
                endDate: endDate.replace('-', '/')
            }, config)

            return event
        } catch (err) {
            console.log(err)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const event = await saveEvent()
        if (event) {
            alert("created")
            navigate('/')
        } else {
            alert("You can't create event for this time")
        }
    }

    return (
        <div className={styles.submitForm}>
            <Title>Add event</Title>
            <form onSubmit={handleSubmit}>
                <Input
                    type={"text"}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={"Title"}/>
                <Input
                    type={"text"}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={"Description"}/>
                <div>
                    <label htmlFor="startDate">Start date</label>
                    <Input
                        id="startDate"
                        type={"date"}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder={"Start Date"}/>
                </div>

                <div>
                    <label htmlFor="startDate">End date</label>
                    <Input
                        id="endDate"
                        type={"date"}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder={"End Date"}/>
                </div>


                <Button type={"submit"}>Save</Button>

            </form>
        </div>
    );
};

export default AddEvent;