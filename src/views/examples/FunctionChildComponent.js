import React from 'react';

const FunctionChildComponent = (props) => {
    let { name, age } = props;
        return (
            <>
                <div>Child Component {name} {age}</div>
            </>
        )
}

export default FunctionChildComponent;