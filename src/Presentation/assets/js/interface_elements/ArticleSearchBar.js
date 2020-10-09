import React, {useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import SearchIcon from '../../images/icon/Search.svg';
import DeleteIcon from '../../images/icon/Delete.svg'
import SearchMonitor from './SearchMonitor';
import {getListOfArticles} from '../data_providers/ArticleProvider';

export const ArticleSearchBar = function() {
    const deleteButtonId = 'SearchDeleteButton' + Date.now();
    const [searchMonitor, setSearchMonitor] = useState('');
    const [searchBar, setSearchBar] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [deleteButton, setDeleteButton] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const history = useHistory();
    const location = useLocation();

    const deleteByClick = function() {
        if (deleteButton) {
            searchBar.value = '';
            setSearchQuery('');
            deleteButton.classList.remove('Search__Show__DeleteButton');
            searchBar.classList.remove('Search__OnInput');
            searchMonitor.classList.remove('Search__Monitor__Visible');
            searchMonitor.classList.add('Search__Monitor__Invisible');
            let searchQuery = new URLSearchParams(location.search).get("search") ?? '';
            if (searchQuery)
                history.push("/articles");
        }
    };

    const handleInput = function(event) {
        setSearchQuery(event.target.value);
       
        if (searchBar.value) {
            deleteButton.classList.add('Search__Show__DeleteButton');
            searchBar.classList.add('Search__OnInput');
            if (searchMonitor) {
                searchMonitor.classList.remove('Search__Monitor__Invisible');
                searchMonitor.classList.add('Search__Monitor__Visible');
            }
            getListOfArticles(event.target.value, 1, 7).then(response => {
                setSearchResults(response.data)
            }).catch(error => {
                setSearchResults('');
            })
        }
        else {
            searchBar.classList.remove('Search__OnInput');
            deleteButton.classList.remove('Search__Show__DeleteButton');
            if (searchMonitor) {
                searchMonitor.classList.remove('Search__Monitor__Visible');
                searchMonitor.classList.add('Search__Monitor__Invisible');
            }
            let searchQuery = new URLSearchParams(location.search).get("search") ?? '';
            if (searchQuery)
                history.push("/articles");
        }
        
    };

    const handleOnFocus = function(event) {
        setSearchBar(event.target);
        setDeleteButton(document.getElementById(deleteButtonId));
        setSearchMonitor(document.getElementById('SearchMonitor'));

        if (event.target.value) {
            searchBar.classList.add('Search__OnInput');
            if (searchMonitor) {
                searchMonitor.classList.remove('Search__Monitor__Invisible');
                searchMonitor.classList.add('Search__Monitor__Visible');
            }
        }
    };

    const handleOnBlur = function(event) {
        let clickedElementClass = event.relatedTarget ? event.relatedTarget.className : '';

        if (clickedElementClass.includes('Search__Monitor__Item')) {
            event.relatedTarget.click();
            deleteButton.click();
        }
        searchBar.classList.remove('Search__OnInput');
        if (searchMonitor) {
            searchMonitor.classList.remove('Search__Monitor__Visible');
            searchMonitor.classList.add('Search__Monitor__Invisible');
        }
    };

    const handleSubmit = function(event) {
        if (event.keyCode === 13 && event.target.value) {
            history.push("/articles?search=" + searchQuery);
            searchBar.blur();
        }
    }

    return(
        <div className="Search__Article">
            <div className="Search__Icon">
                <svg>
                    <use xlinkHref={ SearchIcon+'#Search' } />
                </svg>
            </div>
            <input type='text' placeholder="Поиск" className="Search" onInput={handleInput} 
                onBlur={handleOnBlur} onFocus={handleOnFocus} onKeyDown={handleSubmit} />
            <div id={ deleteButtonId } className="Search__DeleteButton" onClick={deleteByClick}>
                <svg>
                    <use xlinkHref={ DeleteIcon + '#Delete' } />
                </svg>
            </div>
            <SearchMonitor articles={searchResults} searchQuery={searchQuery} />
        </div>
    );
};