import { UserContext } from './userContext';
import { useContext, useState } from 'react';


function Withdraw() {

    const {users, setUsers} = useContext(UserContext);
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [allowed, setAllowed] = useState(false);

    let status = `Account Balance $ ${users[0].balance} `;


    const handleChange = (e)=>{
        setWithdrawAmount(e.target.value)

        if(e.target.value > Number(users[0].balance)){
            console.log(`allowed set to false`)
            return setAllowed(false)
        }
        else if(e.target.value <= 0){
            console.log(`allowed set to false`)
            return setAllowed(false)
        }
        else{
            console.log(`allowed set to true`)
            return setAllowed(true);

        }

    }

    const handleWithdraw = (e)=>{
        e.preventDefault();
        let newArr = [...users];
        let newTotal = Number(users[0].balance) - Number(withdrawAmount);
        newArr[0].balance = newTotal;
        setUsers(newArr);
        console.log(`Withdrew ${withdrawAmount}$`);
    }




    return(
        <div>
        <form>
            <label >Withdraw Amount:</label><br></br>
        
            <input type="number" value={withdrawAmount} onChange={(e) => handleChange(e)}/>
            <button onClick={handleWithdraw} disabled={!allowed}>Withdraw</button>
        </form>
        <label>Total Balance:</label><br></br>
        <div>{status}</div>
    </div>
    )
}

export default Withdraw;