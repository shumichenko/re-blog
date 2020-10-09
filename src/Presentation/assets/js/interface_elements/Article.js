import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import renderHTML from 'react-html-parser';

import {DateFormatter} from '../utilities/DateFormatter';
import Image from '../interface_elements/Image.js';

const Article = function(props) {
    const article = props.article;

    if (!article)
        return '';
    else if (article.content) {
        return(
            <article className="Article__Content">
                <h2 className="Text__Header Article__Header Show__OnMedAndDown">{article.title}</h2>
                <div className="Article__Section__MetaData">
                    <div className="Article__Image__Author" style={{backgroundImage: "url(/image/" + article.author.profile_image + ")"}}></div>
                    <p className="Article__Text__AuthorName Hide__OnMedAndDown">
                        {article.author.first_name + ' ' + article.author.last_name}
                    </p>
                    <p className="Article__Text__Date Hide__OnMedAndDown">
                        { <DateFormatter date={article.created_at} /> }
                    </p>
                    <div className="Show__OnMedAndDown">
                        <p className="Article__Text__AuthorName">
                            {article.author.first_name + ' ' + article.author.last_name}
                        </p>
                        <p className="Article__Text__Date">
                            { <DateFormatter date={article.created_at} /> }
                        </p>
                    </div>
                </div>
                <h2 className="Text__Header Article__Header Hide__OnMedAndDown">{article.title}</h2>
                <div className="Article__Text">{renderHTML(article.content)}</div>
            </article>
        );
    }
    else {
        return(
            <Fragment>
                <article className="Article Hide__OnMedAndDown">
                    <div className="Article__Section__MetaData">
                        <div className="Article__Image__Author" style={{backgroundImage: "url(/image/" + article.author.profile_image + ")"}}></div>
                        <p className="Article__Text__AuthorName">
                            {article.author.first_name + ' ' + article.author.last_name}
                        </p>
                        <p className="Article__Text__Date">
                            { <DateFormatter date={article.created_at} /> }
                        </p>
                    </div>
                    <h2 className="Text__Header Article__Header">
                        <NavLink className="Link Link__Header" to={ "/articles/" + article.alias }>
                            {article.title}
                        </NavLink>
                    </h2>
                    <Image imageName={'/image/' + article.image_link} />
                    <p className="Article__Text ">{article.description}</p>
                    <p className="Text__Link Text__Uppercase">
                        <NavLink className="Link Link__Text" exact={true} to={ "/articles/" + article.alias }>
                            Читать дальше &#8250;
                        </NavLink>
                    </p>
                </article>
                <article className="Article__Mobile Show__OnMedAndDown">
                    <div className="Article__Section__MetaData">
                        <div className="Article__Image__Author" style={{backgroundImage: "url(/image/" + article.author.profile_image + ")"}}></div>
                        <div>
                            <p className="Article__Text__AuthorName">
                                {article.author.first_name + ' ' + article.author.last_name}
                            </p>
                            <p className="Article__Text__Date">
                                { <DateFormatter date={article.created_at} /> }
                            </p>
                        </div>
                    </div>
                    <div className="Article__Mobile__Preview" style={{ backgroundImage: 'url(/image/' + article.image_link + ')' }}>
                        <NavLink className="Link" to={ "/articles/" + article.alias }>
                            <div className="Article__Mobile__Shader">
                                <h2 className="Article__Mobile__Header Text__Header">
                                    {article.title}
                                </h2>
                                <p className="Article__Mobile__Text">
                                    {article.author.first_name + ' ' + article.author.last_name}
                                </p>
                                <div className="Article__Mobile__Label">
                                    <p className="Text__Link">Читать</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </article>
            </Fragment>
        );
    }
};

export default Article;