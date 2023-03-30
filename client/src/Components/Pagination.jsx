import React from 'react';
import {getPagesArray} from "../utils/pages.js";
import styles from '../styles/PagesButton.module.scss'
import PageButton from "./UI/PageButton.jsx";
import paginationStyles from '../styles/Pagination.module.scss'

const Pagination = ({page, changePage, totalPages}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className={paginationStyles.pagination}>
            {
                pagesArray.map(p =>
                    <PageButton
                        onClick={() => changePage(p - 1)}
                        className={page === p - 1 && styles.pagesButton__active}
                        key={p}
                    >
                        {p}
                    </PageButton>
                )
            }
        </div>
    );
};

export default Pagination;