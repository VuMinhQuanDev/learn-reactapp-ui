import React from "react";
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
        //! = toggle
    }
    render() {
        //Destructuring array/object
        const { listUsers } = this.props;
        //props = properties
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }} > {
                        this.state.isShowListUser === true ? 'Hide list user:' : "Show list user"
                    }</span>
                </div>
                {
                    this.state.isShowListUser &&
                    //Sau && sẽ truyền vào 1 khối HTML
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div >
                            )
                        })}
                    </div >
                }
            </div>
        )
    }
}
export default DisplayInfor; 