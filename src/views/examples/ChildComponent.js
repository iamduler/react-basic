import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        })
    }

    handleDeleteJob = (job) => {
        this.props.deleteJob(job);
    }
    
    render() {
        let { jobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {showJobs === false ? 
                    <div><button className='btn-show' onClick={() => this.handleShowHide()}>Show</button></div>
                : 
                    <>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                        <div className='job-list'>
                            {
                                jobs.map((item, index) => {
                                    if (item.salary >= 400) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - ${item.salary} <></> <span onClick={(event) => this.handleDeleteJob(item)}>x</span>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;