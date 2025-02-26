import Users from "./Users";
import UserName from './UserName'
import Usercontext from "../utils/UserContext";
import { useContext } from "react";
const About=()=>{
  const {loggedInUser}=useContext(Usercontext);
  return(
    <div>
      <h1>About</h1>
      <h2>This is namaste react</h2>
      <h2>{loggedInUser}</h2>

      {/* <Users name={'sumit'} /> */}
      {/* <UserName name='sumit' /> */}
    </div>
  );
}
export default About;