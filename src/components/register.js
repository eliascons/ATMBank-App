import { UserContext } from './userContext';
import { useContext, useState } from 'react';


function Register() {
    const { users, setUsers } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState(''); 
    const [status, setStatus] = useState('');
    

    const validate = (field, label) => {

        if(!field){
            setStatus(`Error invalid ${label}`);
            return false;
        }
        else if(label === 'password' && field.length < 8){
            setStatus(`Error invalid ${label}`);
            return false;
        }
        else{
            return true;
        }

    } 

    const handleSubmit = () =>{
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;

        setUsers([...users, {name, email, password, balance: 100, userId: users.length}]);
        setStatus(`Registered user: ${name}`);
        
    }


    return (
        <div>

            <h1>Register Page</h1>

            <label>Name:</label><br></br>
            <input value={name} onChange={(event) => setName(event.target.value)}></input><br></br>

            <label>Email:</label><br></br>
            <input value={email} onChange={(event) => setEmail(event.target.value)}></input><br></br>

            <label>Password:</label><br></br>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password"></input><br></br>

            <button onClick={handleSubmit}>Submit</button><br></br>
            <p>Registration status:</p>
            <p>{status}</p><br></br>


        </div>
    )
}

export default Register;