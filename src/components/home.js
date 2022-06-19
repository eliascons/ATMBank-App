import { useContext } from 'react';
import { UserContext } from './userContext';

function Home() {
    const { users } = useContext(UserContext);
    return (

        <div>
            <h1>Home Page</h1>
            {users.map((item, index) => {
                return (
                    <ul key={index} >
                        <label>UserID: </label>
                        {item.userId}
                        <br></br>
                        <label>Name: </label>
                        {item.name}
                        <br></br>
                        <label>Email: </label> 
                        {item.email}
                        <br></br>
                        <label>Balance: </label>
                        {item.balance}
                        <br></br>
                        <label>Password: </label>
                        {item.password}
                        <br></br>
                        <div>-----------------</div>
                    </ul>
                    
                )
            })}
        </div>

    );
}

export default Home;