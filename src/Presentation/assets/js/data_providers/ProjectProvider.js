import axios from 'axios';

export const getProject = function(alias) {
    return new Promise((resolve, reject) => {

        axios.get('/api/projects/' + alias, {}, {
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
            console.error('При загрузке проекта произошла ошибка: ОШИБКА ' + error.response.status);
            reject({
                status: error.response.status,
                data: error.response.data
            });
        });
    });
};

export const getListOfProjects = function(pageNumber = 1, limit = 10) {
    return new Promise((resolve, reject) => {

        axios.get('/api/projects', {
            params: {
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
            console.error('При загрузке списка проектов произошла ошибка: ОШИБКА ' + error.response.status);
            reject({
                status: error.response.status,
                data: error.response.data
            });
        });
    });
}; 