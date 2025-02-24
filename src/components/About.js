import Users from "./Users";
import UserName from './UserName'
const About=()=>{
  return(
    <div>
      <h1>About</h1>
      <h2>This is namaste react</h2>
      <Users name={'sumit'} />
      <UserName name='sumit' />
    </div>
  );
}
export default About;