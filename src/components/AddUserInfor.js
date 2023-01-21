import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: '',
        age:''
    }
    //JSX
    // handleClick = (event) => {
    //     console.log(`My name is ${this.state.name}`);
    //     // console.log(event.target);
    //     // console.log("My name is", this.state.name);
    //     //Merge state chỉ có trong react class component
    //     //Thay đổi trạng thái của state
    //     this.setState({
    //         name:'Phùng Quỳnh Hương',
    //         address:'Bắc Giang',
    //         age: Math.floor((Math.random()*100)+1)
    //     })
    // }
    // handleOnMouseOver = (event) => {
    //     // console.log(event.pageY);
    //     console.log(">>>hover me my btn");

    // }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        this.props.handleAddNewUser({
            id:Math.floor((Math.random()*100)+1)+'-random',
            name:this.state.name,
            age:this.state.age
        })
    }
    render() {
        return (
            <div>My name is {this.state.name} and i'm from {this.state.address} and now {this.state.age} years old
                {/* <button onMouseOver={this.handleOnMouseOver} >Hover me</button> */}
                {/* <button onClick={this.handleClick} >Click me</button> */}
                <label>Your name: </label>
                <form onSubmit={(event) => this.handleOnSubmit(event)} >
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />
                </form>
                <label>Your age: </label>
                <form onSubmit={(event) => this.handleOnSubmit(event)} >
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }


}

export default AddUserInfor;