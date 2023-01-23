import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
    const [listUsers, setListUser] = useState(
        [
            { id: 1, name: 'Huong Phung', age: 16 },
            { id: 2, name: 'Quan Vu', age: 22 },
            { id: 3, name: 'Quan Minh Vu', age: 23 },
        ]
    )
    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUsers])
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUser(listUsersClone);
    }
    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br /><br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );
}
export default MyComponent;