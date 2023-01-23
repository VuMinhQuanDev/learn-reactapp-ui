import React, { useEffect } from "react";
import '../assets/scss/DisplayInfor.scss'
import { useState } from "react";
const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideLisUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideLisUser(!isShowHideListUser)
    }
    useEffect(() => {
        if (listUsers.length===0) {
            alert(">>>Delete all user");
        }
    },[listUsers]
    );

    return (
        
            
        <div className="display-infor_container" >
            <div>
                <span onClick={() => handleShowHideListUser()} >
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)} >Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}
export default DisplayInfor; 