import { UserContext } from './userContext';
import { useContext, useState } from 'react';


function Deposit() {

    const { users, setUsers } = useContext(UserContext);
    const [deposit, setDeposit] = useState(0);
    const [validate, setValidate] = useState(true);

    let status = `Account Balance $ ${users[0].balance} `;
   
    
    const handleChange = (e) =>{
        setDeposit(e.target.value)

        if(Number(e.target.value) <= 0){
            return setValidate(false);
        }
        else{
            setValidate(true);
        }
    }

    const handleInput = (event) =>{
        let total = Number(users[0].balance) + Number(deposit);
        
        let newArr = [...users];
        newArr[0].balance = total;
        event.preventDefault();
        setUsers(newArr);
    }
    
    return (
        <div>
            <form>
                <label >Deposit Amount:</label><br></br>
            
                <input type="number" value={deposit} onChange={(e) => handleChange(e)}/>
                <button onClick={handleInput} disabled={!validate}>Deposit</button>
            </form>
            <label>Total Balance:</label><br></br>
            <div>{status}</div>
        </div>
    )
}

export default Deposit;