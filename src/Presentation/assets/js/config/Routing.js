import About from '../pages/About'; 
import ArticlesList from '../pages/ArticlesList';
import ArticleView from '../pages/ArticleView';
import ProjectsList from '../pages/ProjectsList'; 
import ProjectView from '../pages/ProjectView';

/* 
    Project routing object
    NOTICE! Each route name and path should be unique
*/
export const Routing = {
    articles_list: {
        path: '/articles',
        exact: true,
        component: ArticlesList,
        layout: 'BlogLayout',
        name: 'Блог'
    },
    article_view: {
        path: '/articles/:alias',
        exact: true,
        component: ArticleView,
        layout: 'BlogLayout',
        name: ''
    },
    about: {
        path: '/about',
        exact: true,
        component: About,
        layout: 'LandingLayout',
        name: 'Обо мне'
    },
    projects_list: {
        path: '/projects',
        exact: true,
        component: ProjectsList,
        layout: 'BlogLayout',
        name: 'Портфолио'
    },
    project_view: {
        path: '/projects/:alias',
        exact: true,
        component: ProjectView,
        layout: 'BlogLayout',
        name: 'Проект'
    }
};