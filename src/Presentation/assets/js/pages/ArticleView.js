import React, {Fragment, Component} from 'react';

import {getArticle} from '../data_providers/ArticleProvider';
import Article from '../interface_elements/Article';
import Contact from '../interface_elements/Contact';
import NotFound from './NotFound';

class ArticleView extends Component {
    constructor() {
        super();
        this.state = {
            responseStatus: '',
            articleInstance: '',
            loading: true
        };
    }
    
    getPageData() {
        const alias = this.props.match.params.alias;

        getArticle(alias).then(response => {
            this.setState({
                responseStatus: response.status,
                articleInstance: response.data,
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
        this.getPageData();
    }
    
    componentDidUpdate(prevProps) { 
        if (prevProps.match.params.alias !== this.props.match.params.alias)
            this.getPageData();
    }
    
    render() {
        let responseStatus = this.state.responseStatus;
        let articleInstance = this.state.articleInstance;
        document.title = articleInstance.title ?? '';
        
        if (this.state.loading)
            return('loading...');
        else if (responseStatus === 404)
            return(<NotFound />);
        else if (responseStatus === 200) {
            return(
                <Fragment>
                    <Article article={articleInstance} />
                    <Contact />
                </Fragment>
            );
        }
    };
};

export default ArticleView;