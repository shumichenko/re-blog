import React, {Component, Fragment} from 'react';

import Project from './Project';
import NotFound from '../pages/NotFound';
import {getListOfProjects} from '../data_providers/ProjectProvider';

class ProjectPreviewList extends Component {
    constructor() {
        super();
        this.state = {
            responseStatus: '',
            projects: '',
            loading: true
        };
    }

    componentDidMount() {
        getListOfProjects(1, 4).then(response => {
            this.setState({
                responseStatus: response.status,
                projects: response.data,
            });
        }).catch(error => {
            this.setState({
                responseStatus: error.status,
            });
        }).finally(() => {
            this.setState({loading:false})
        });
    }

    render() {
        let responseStatus = this.state.responseStatus;
        let projects = this.state.projects;

        if (this.state.loading)
            return('loading...');
        else if (responseStatus === 404)
            return(<NotFound />);
        else if (responseStatus === 204)
            return(<NoContentResponse />);
        else if (responseStatus === 200) {
            return(
                <Fragment>
                    <div className="Landing__Biography__Block Text__Landing">
                        <h1>Примеры моих работ</h1>
                    </div>
                    <div className="Projects__Container">
                {
                    projects.map(project =>
                        <Project key={project.id} project={project} />
                    )
                }
                    </div>
                </Fragment>
            );
        }
    };
}

export default ProjectPreviewList;