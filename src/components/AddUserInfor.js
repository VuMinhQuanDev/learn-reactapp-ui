import React, { useState } from "react";

const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address] = useState('Lunatic');
    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    };
    return (
        <>My name is {name} and i live in {address} and now {age} years old
            <p>Your name: </p>
            <form onSubmit={(event) => handleOnSubmit(event)} >
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handleOnChangeInput(event) }}
                />
            </form>
            <p>Your age: </p>
            <form onSubmit={(event) => handleOnSubmit(event)} >
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>Submit</button>
            </form>
        </>
    )
};
export default AddUserInfor;