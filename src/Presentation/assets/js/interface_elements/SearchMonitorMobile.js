import React from 'react';
import {NavLink} from 'react-router-dom';

const SearchMonitorMobile = function(props) {
    const articles = props.articles;
   
    if (articles) {
        return(
            <div id="SearchMonitorMobile" className="Text__Interface Search__Monitor__Invisible">
            {
                articles.map(function(article)  {
                    return(
                        <NavLink key={article.id} className="Search__Monitor__Item Link" exact={true} to={"/articles/" + article.alias}>
                            <div className="Search__Monitor__Picture" style={{backgroundImage: 'url(/image/' + article.image_link + ')'}}></div>
                            <div>{article.title}</div>
                        </NavLink>
                    );
                })
            }
            </div>
        );
    } else {
        return(
            <div id="SearchMonitorMobile" className="Text__Interface Search__Monitor__Invisible">
                <div className="Search__Monitor__Item">
                    <p>                        
                        По вашему запросу ничего не найдено
                    </p>
                </div>
            </div>
        );
    }
};

export default SearchMonitorMobile;