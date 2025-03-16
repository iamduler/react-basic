import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Duler',
        age: 25
    }

    handleClickBtn = () => {
        alert('clicked');
    }

    handleChangeValue = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
            <>
                <div>Hello my very first Component</div>
                <div>My name is {this.state.name}</div>
                <div>
                    <input type='text' onChange={(event) => this.handleChangeValue(event)}></input>

                </div>
                <div className='button'>
                    <button onClick={(e) => this.handleClickBtn() }>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;