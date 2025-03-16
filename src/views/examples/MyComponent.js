import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    state = {
        jobs: [
            { id: 'job1', title: 'Developers', salary: '500' },
            { id: 'job2', title: 'BA', salary: '400' },
            { id: 'job3', title: 'Testers', salary: '300' },
        ]
    }

    addNewJob = (job) => {
        this.setState({
            jobs: [...this.state.jobs, job],
        })
    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob}/>
                <ChildComponent jobs={this.state.jobs} ></ChildComponent>
            </>
        )
    }
}

export default MyComponent;