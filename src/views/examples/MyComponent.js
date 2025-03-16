import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        jobs: [
            { id: 'job1', title: 'Developers', salary: '500' },
            { id: 'job2', title: 'BA', salary: '400' },
            { id: 'job3', title: 'Testers', salary: '300' },
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }
    
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        alert('Submit');
    }

    render() {
        return (
            <>
                {/* <div>Hello HTML Form</div>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br></br>
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}></input><br></br>
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}></input><br></br><br></br>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}></input>
                </form>  */}

                <ChildComponent jobs={this.state.jobs} ></ChildComponent>
            </>
        )
    }
}

export default MyComponent;