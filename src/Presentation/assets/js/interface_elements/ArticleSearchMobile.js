import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import SearchIcon from '../../images/icon/Search.svg';
import DeleteIcon from '../../images/icon/Delete.svg'
import SearchMonitorMobile from './SearchMonitorMobile';
import {getListOfArticles} from '../data_providers/ArticleProvider';

export const ArticleSearchMobile = function() {
    const deleteButtonId = 'SearchDeleteButton' + Date.now();
    const [searchBar, setSearchBar] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [deleteButton, setDeleteButton] = useState('');
    const history = useHistory();

    const deleteByClick = function() {
        if (deleteButton) {
            searchBar.value = '';
            setSearchQuery('');
            deleteButton.classList.remove('Search__Show__DeleteButton');
            searchBar.classList.remove('Search__OnInput');
            history.push("/articles");
        }
    };

    const handleInput = function(event) {
        setSearchQuery(event.target.value);
       
        if (searchBar.value) {
            deleteButton.classList.add('Search__Show__DeleteButton');
            searchBar.classList.add('Search__OnInput'); 
            history.push("/articles?search=" + event.target.value);
        }
        else {
            searchBar.classList.remove('Search__OnInput');
            deleteButton.classList.remove('Search__Show__DeleteButton');
            history.push("/articles");
        }
    };

    const handleOnFocus = function(event) {
        setSearchBar(event.target);
        setDeleteButton(document.getElementById(deleteButtonId));

        if (event.target.value)
            searchBar.classList.add('Search__OnInput');
    };

    return(
        <div className="Search__Article">
            <div className="Search__Icon">
                <svg>
                    <use xlinkHref={ SearchIcon+'#Search' } />
                </svg>
            </div>
            <input type='text' placeholder="Поиск" className="Search" onInput={handleInput} onFocus={handleOnFocus} />
            <div id={ deleteButtonId } className="Search__DeleteButton" onClick={deleteByClick}>
                <svg>
                    <use xlinkHref={ DeleteIcon + '#Delete' } />
                </svg>
            </div>
            
        </div>
    );
};