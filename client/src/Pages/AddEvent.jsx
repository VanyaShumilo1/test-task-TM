import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Title from "../Components/UI/Title.jsx";
import Input from "../Components/UI/Input.jsx";
import Button from "../Components/UI/Button.jsx";
import styles from '../styles/SubmitForm.module.scss'

const AddEvent = () => {

    const params = useParams()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    console.log(startDate)
    const handleSubmit = () => {

    }

    return (
        <div className={styles.submitForm}>
            <Title>Add event</Title>
            <form onSubmit={handleSubmit}>
                <Input
                    type={"text"}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={"First name"}/>
                <Input
                    type={"text"}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={"Last name"}/>
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