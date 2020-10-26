import React, {useState} from 'react'

const PastDinnerList = () => {
    const [pastDinners, setPastDinners] = useState([])

    const pastDinChange = (event) => {
        setPastDinners({...pastDinners, [event.target.name]: event.target.value})
    }

    const pastDinSubmit = (event) => {
        event.preventDefault()
        console.log("past dinners:", pastDinners)
    }

    console.log("meal to post", pastDinners)
    
    return (
        <div>
            <h4>These are previously eaten meals:</h4>
            <form onSubmit={pastDinSubmit}>
                <input
                    name="meal"
                    type="text"
                    value={pastDinners.name}
                    onChange={pastDinChange}
                    placeholder="what did you eat last night?" 
                />
                <input
                    name="ingredient1"
                    type="text"
                    value={pastDinners.ingredient1}
                    onChange={pastDinChange}
                    placeholder="main ingredient?" 
                />
                <input
                    name="ingredient2"
                    type="text"
                    value={pastDinners.ingredient2}
                    onChange={pastDinChange}
                    placeholder="second ingredient?" 
                />
                <input
                    name="ingredient3"
                    type="text"
                    value={pastDinners.ingredient3}
                    onChange={pastDinChange}
                    placeholder="third ingredient?" 
                />
                <input
                    name="ingredient4"
                    type="text"
                    value={pastDinners.ingredient4}
                    onChange={pastDinChange}
                    placeholder="fourth ingredient?" 
                />
                <input
                    name="ingredient5"
                    type="text"
                    value={pastDinners.ingredient5}
                    onChange={pastDinChange}
                    placeholder="fifth ingredient?" 
                />
                <button>record that meal!</button>
            </form>       
        </div>
    )
}

export default PastDinnerList
