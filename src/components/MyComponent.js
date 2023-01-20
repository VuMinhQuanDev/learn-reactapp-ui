import React from "react";

class MyComponent extends React.Component {
    //JSX
    state = {
        name: 'Phùng Quỳnh Hương',
        address: 'Bắc Giang',
        age: 20
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
            </div>
        );
    }
}
export default MyComponent;