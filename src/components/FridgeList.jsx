import React, {useState} from 'react'

const FridgeList = () => {
    const [fridge, setFridge] = useState([])

    const fridgeChange = (event) => {
        setFridge({...fridge, [event.target.name]: event.target.value})
    }

    const fridgeSubmit = (event) => {
        event.preventDefault()
        console.log("fridge name then amount", fridge.name, fridge.amount)
    }

    console.log("fridge:", fridge)

    return (
        <div>
            <h4>This is whats in the fridge/pantry:</h4>
            <form onSubmit={fridgeSubmit}>
                <input 
                    name="name"
                    type="text"
                    value={fridge.name}
                    onChange={fridgeChange}
                    placeholder="add food to pantry/fridge"
                />
                <input 
                    name="amount"
                    type="text"
                    value={fridge.amount}
                    onChange={fridgeChange}
                    placeholder="how much you got?"
                /> 
                <button>add that food!</button>
            </form>  
            <h3>{fridge.name}, {fridge.amount}</h3>
        </div>
    )
}

export default FridgeList
