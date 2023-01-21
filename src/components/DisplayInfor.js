import React from "react";
import '../assets/scss/DisplayInfor.scss'
// import logo from '../assets/img/hp.jpg'

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
            <div className="display-infor_container" >
                {/* <img className="img-container" src={logo} alt="" /> */}
                <>
                    <span onClick={() => { this.handleShowHide() }} > {
                        this.state.isShowListUser === true ? 'Hide list user:' : "Show list user"
                    }</span>
                </>
                {
                    this.state.isShowListUser &&
                    //Sau && sẽ truyền vào 1 khối HTML
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)} >Delete</button>
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
}
export default DisplayInfor; 