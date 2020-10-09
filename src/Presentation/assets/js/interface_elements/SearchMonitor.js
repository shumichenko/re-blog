import React from 'react';
import {NavLink} from 'react-router-dom';

const SearchMonitor = function(props) {
    const articles = props.articles;
   
    if (articles) {
        return(
            <div id="SearchMonitor" className="Text__Interface Search__Monitor__Invisible">
                <NavLink className="Search__Monitor__Item Search__Monitor__Item__Divider Link" exact={true} to={"/articles?search=" + (props.searchQuery ?? '')}>
                    <div>
                        <p>Показать все результаты &#8250;</p>
                    </div>
                </NavLink>
                <div className="Search__Monitor__Label">Результаты поиска</div>
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
            <div id="SearchMonitor" className="Text__Interface Search__Monitor__Invisible">
                <div className="Search__Monitor__Item">
                    <p>                        
                        По вашему запросу ничего не найдено
                    </p>
                </div>
            </div>
        );
    }
};

export default SearchMonitor;