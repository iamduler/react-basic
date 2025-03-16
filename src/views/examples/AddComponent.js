import React from 'react';

class AddComponent extends React.Component {

	state = {
		title: '',
        salary: '',
	}

	handleChangeJobTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

		if (!this.state.title || !this.state.salary) {
			alert('Missing parameters');
			return;
		}

        this.props.addNewJob({
			id: Math.random(),
			title: this.state.title,
			salary: this.state.salary,
		});

		this.setState({
			title: '',
			salary: ''
		})
    }

	render() {
		return (
			<form action="/action_page.php">
				<label htmlFor="fname">Job title:</label><br></br>
				<input type="text" value={this.state.title} onChange={(event) => this.handleChangeJobTitle(event)}></input><br></br>
				<label htmlFor="lname">Salary:</label><br></br>
				<input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)}></input><br></br><br></br>
				<input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}></input>
			</form>
		)
	}
}

export default AddComponent;