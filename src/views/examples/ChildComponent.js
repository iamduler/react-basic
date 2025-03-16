import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        })
    }
    
    render() {
        let { jobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {!showJobs && <div><button onClick={() => this.handleShowHide()}>Show</button></div>}
                {showJobs && 
                    <>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                        <div className='job-list'>
                            {
                                jobs.map((item, index) => {
                                    if (item.salary >= 400) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - ${item.salary}
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