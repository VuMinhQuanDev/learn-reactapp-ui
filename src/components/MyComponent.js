import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //DRY: don't repeat yourself
    state = {
        listUsers: [
            {id:1, name:'Huong Phung', age:30},
            {id:2, name:'Minh Quan', age:30},
            {id:3, name:'Quan Huong', age:30},
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
                <br/><br/>
                <DisplayInfor 
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;