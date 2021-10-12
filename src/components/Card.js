
function Card(props) {

    const reduce = {
        width: "500px",
    }

    return (
        <div className="cardText">
            <img className="card" src={props.link} style ={reduce} alt=""/>
              <p>{props.name}</p>
              <p>Starting at $4.00</p>
              <p><button name={props.name} value= {props.value} onClick={props.decrement}>-</button> {props.value} <button name={props.name} value={props.value} onClick={props.increment}>+</button></p> 
              <button onClick={props.onClick}>Add to Cart</button>
            </div>
    )
}

export default Card;