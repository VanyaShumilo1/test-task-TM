import React, {useEffect, useState} from 'react';
import axios from "../axios.js";
import {useFetching} from "../hooks/useFetching.js";
import UserItem from "../Components/UserItem.jsx";
import styles from '../styles/Home.module.scss'
import UsersTableHeader from "../Components/UsersTableHeader.jsx";
import Table from "../Components/Table.jsx";
import Pagination from "../Components/Pagination.jsx";
import {getPagesCount} from "../utils/pages.js";

const Home = () => {

    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])
    const [totalPages, setTotalPages] = useState(10)
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(5)

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const response = await axios.get(`/user/?offset=${page}&limit=${limit}`)
        setUsers(response.data.users)
        setTotalPages(getPagesCount(response.data.totalUsers, limit))
    })


    const [fetchEvents, isEventsLoading, eventsError] = useFetching(async () => {
        const response = await axios.get('/event')
        setEvents(response.data.events)
    })

    const changePage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        fetchUsers()
        fetchEvents()
    }, [page])

    return (
        <div>
            <Table>
                <UsersTableHeader/>
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
                <Pagination totalPages={totalPages} page={page} changePage={changePage}/>

            </Table>

        </div>

    );
};

export default Home;