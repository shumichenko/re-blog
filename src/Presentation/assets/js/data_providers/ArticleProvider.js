import axios from 'axios';

export const getArticle = function(alias) {
    return new Promise((resolve, reject) => {

        axios.get('/api/articles/' + alias, {}, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            resolve ({
                status: response.status, 
                data: response.data
            });
        }).catch(error => {
            console.error('При загрузке статьи произошла ошибка: ОШИБКА ' + error.response.status);
            reject({
                status: error.response.status,
                data: error.response.data
            });
        });
    });
};

export const getListOfArticles = function(searchQuery = '', pageNumber = 1, limit = 10) {
    return new Promise((resolve, reject) => {

        axios.get('/api/articles', {
            params: {
                search: searchQuery,
                page_number: pageNumber,
                limit: limit
            }
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            resolve ({
                status: response.status, 
                data: response.data.slice(0, 10)
            });
        }).catch(error => {
            console.error('При загрузке списка статей произошла ошибка: ОШИБКА ' + error.response.status);
            reject({
                status: error.response.status,
                data: error.response.data
            });
        });
    });
}; 