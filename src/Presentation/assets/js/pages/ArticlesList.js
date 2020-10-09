import React, {Component, Fragment} from 'react';

import {getListOfArticles} from '../data_providers/ArticleProvider';
import {ArticleSearchMobile} from '../interface_elements/ArticleSearchMobile';
import NoContentResponse from '../interface_elements/NoContentResponse';
import Article from '../interface_elements/Article';

class ArticlesList extends Component {
    constructor() {
        super();
        this.state = {
            responseStatus: '',
            articles: '',
            loading: true
        };
    }

    getPageData() {
        const searchQuery = new URLSearchParams(this.props.location.search).get("search") ?? '';

        getListOfArticles(searchQuery).then(response => {
            this.setState({
                responseStatus: response.status,
                articles: response.data
            });
        }).catch(error => {
            this.setState({
                responseStatus: error.status,
            });
        }).finally(() => {
            this.setState({loading:false})
        });
    }

    componentDidMount() {
        document.title = "ReBlog - Блог";
        this.getPageData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search)
            this.getPageData(); 
    }

    render() {
        let responseStatus = this.state.responseStatus;
        let articles = this.state.articles;

        if (this.state.loading)
            return('loading...');
        else if (responseStatus === 404)
            return(<NotFound />);
        else if (responseStatus === 204)
            return(
                <Fragment>
                    <div className="Show__OnMedAndDown">
                        <ArticleSearchMobile />
                    </div>
                    <div className="Text__Landing">
                        <p>По вашему запросу ничего не найдено</p>
                    </div>
                </Fragment>
            );
        else if (responseStatus === 200) {
            return(
                <Fragment>
                    <div className="Show__OnMedAndDown">
                        <ArticleSearchMobile />
                    </div>
                {
                    articles.map(article =>
                        <Article key={article.id} article={article} />
                    )
                }
                </Fragment>
            );
        }
    };
}

export default ArticlesList;