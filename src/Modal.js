
function Modal(props) {

    const style = {
        textAlign: "right",
    }

    //this is the cart itself. it appears as an overlay for the webpage. 
    return <div className="modal">
       <h3>My Cart</h3>
       {props.displayTotal}
       <h4 style={style }>Total: {props.total}</h4>
       <button id="modalCancel">Cancel</button>
       <button id="modalCheckout">Checkout</button> 
    </div>
}

export default Modal;