import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from "../axios.js";
import {useFetching} from "../hooks/useFetching.js";
import UserItem from "../Components/UserItem.jsx";
import styles from '../styles/Home.module.scss'

const Home = () => {

    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const response = await axios.get('/user')
        setUsers(response.data.users)
    })

    const [fetchEvents, isEventsLoading, eventsError] = useFetching(async () => {
        const response = await axios.get('/event')
        setEvents(response.data.events)
    })

    useEffect(() => {
        fetchUsers()
        fetchEvents()
    }, [])

    return (
        <div>
            <div className={styles.table}>
                <div className={styles.table__header}>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Phone number</div>
                    <div>Events count</div>
                    <div>Upcoming event</div>
                </div>

                <div className={styles.table__items}>
                    {
                        isUsersLoading
                            ? "Loading"
                            : users.map(user => (
                                    <UserItem events={events} key={user._id} user={user}/>
                                )
                            )
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;