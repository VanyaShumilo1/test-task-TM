import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching.js";
import axios from "../axios.js";
import {Link, useParams} from "react-router-dom";
import styles from '../styles/User.module.scss'
import UserItem from "../Components/UserItem.jsx";
import UsersTableHeader from "../Components/UsersTableHeader.jsx";
import EventsTableHeader from "../Components/EventsTableHeader.jsx";
import EventItem from "../Components/EventItem.jsx";
import Table from "../Components/Table.jsx";
import LinkBtn from "../Components/UI/LinkBtn.jsx";

const User = () => {

    const params = useParams()
    const userId = params.id

    const [user, setUser] = useState({})
    const [events, setEvents] = useState([])

    const [fetchUser, isUserLoading, userError] = useFetching(async () => {
        const response = await axios.get(`/user/${userId}`)
        setUser(response.data.user)
    })

    const [fetchEvents, isEventsLoading, eventsError] = useFetching(async () => {
        const response = await axios.get(`/event/${userId}`)
        setEvents(response.data.events)
    })

    useEffect(() => {
        fetchUser()
        fetchEvents()
    }, [])

    return (
        <div className={styles.user}>
            <Table>
                <UsersTableHeader/>
                <UserItem user={user} events={events}/>
            </Table>

            <div className={styles.addEventBtn}>
                <LinkBtn to={'addEvent'}>
                    Add Event
                </LinkBtn>
            </div>


            <Table>
                <EventsTableHeader/>
                <div className={styles.table__items}>
                    {
                        isEventsLoading
                            ? "Loading"
                            : events.map(event => <EventItem key={event._id} event={event}/>)
                    }
                </div>

            </Table>
        </div>
    );
};

export default User;