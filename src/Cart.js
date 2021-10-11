import react, {useState} from 'react';


function Cart () {
    const [items, addItems] = useState([]);

    function increment(obj) {
        addItems(prevState => prevState.push(obj));
    }

}

export default Cart;