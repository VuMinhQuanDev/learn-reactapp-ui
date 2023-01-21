import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //DRY: don't repeat yourself
    state = {
        listUsers: [
            {id:1, name:'Huong Phung', age:16},
            {id:2, name:'Quan Vu', age:22},
            {id:3, name:'Huong Can', age:23},
            
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers:[userObj,...this.state.listUsers]
        })
    }

    render() {
        return (
            <div>
                <AddUserInfor 
                handleAddNewUser={this.handleAddNewUser}
                />
                <br/><br/>
                <DisplayInfor 
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;