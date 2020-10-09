import React, {Component} from 'react';

import Project from '../interface_elements/Project';
import NotFound from '../pages/NotFound';
import {getProject} from '../data_providers/ProjectProvider';
import Contact from '../interface_elements/Contact';

class ProjectView extends Component {
    constructor() {
        super();
        this.state = {
            responseStatus: '',
            projectInstance: '',
            loading: true
        };
    }

    getPageData() {
        const alias = this.props.match.params.alias;

        getProject(alias).then(response => {
            this.setState({
                responseStatus: response.status,
                projectInstance: response.data,
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
        const alias = this.props.match.params.alias;
        if (prevProps.match.params.alias !== alias)
            this.getPageData();
    }

    render() {
        let responseStatus = this.state.responseStatus;
        let projectInstance = this.state.projectInstance;
        document.title = projectInstance.title ?? '';

        if (this.state.loading)
            return('loading...');
        else if (responseStatus === 404)
            return(<NotFound />);
        else if (responseStatus === 200) {
            return(
                <div className="Project__Content">
                    <Project project={projectInstance} />
                    <Contact />
                </div>
            );
        }
    };
}

export default ProjectView;