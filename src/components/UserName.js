import React from "react";
class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avatar_url:'',
        name: "",
        location: "",
        bio:'',
        email:''
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sumit-keshari");
    const user = await data.json();
    this.setState({
     userInfo:user
    });
    console.log(user);
  }
  debugger;
  render() {
    const { name,location ,avatar_url,bio,email} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" />
        <h2>{name}</h2>
        <h2>{bio}</h2>
        <h2>{location}</h2>
        <h2>{email}</h2>
        <h2>This is class based componet</h2>
      </div>
    );
  }
}
export default UserName;
