import React from 'react';
import {NavLink} from 'react-router-dom';
import renderHTML from 'react-html-parser';

const Project = function(props) {
    const project = props.project;

    if (!project)
        return '';
    else if (project.content) {
        return(
            <div className="Text__Landing">
                <h1 className="Project__Header">
                    {project.title}
                </h1>
                <div className="Text__Landing">{renderHTML(project.content)}</div>
            </div>
        );
    }
    else {
        return(
            <div className="Project__Card Text__Landing">
                <NavLink className="Link Link__Header Project__Scalable" exact={true} to={'/projects/' + project.alias}>
                    <div className="Project__Preview" style={{backgroundImage: 'url(/image/' + project.image_link + ')'}}></div>
                </NavLink>
                <h1 className="Project__Header">
                    <NavLink className="Link Link__Header" exact={true} to={'/projects/' + project.alias}>
                        {project.title}
                    </NavLink>
                </h1>
                <p>{project.description}</p>
                <span className="Text__Link Text__Uppercase">
                    <NavLink className="Link Link__Text" exact={true} to={ "/projects/" + project.alias }>
                        Смотреть проект &#8250;
                    </NavLink>
                </span>
            </div>
        );
    }
};

export default Project;