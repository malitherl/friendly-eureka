import React ,  {useState}from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import Card from './Card';
import TotalCard from './TotalCard';
import itemData from './itemData';

function Shop(){

    //another thing to implement would be changes to the alignment of letterings
    //and also make it so that modal displays the most accurate amount of 
    //items to place into the cart

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [items, setItems] = useState(itemData);

    function handleClick(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    function increment(event){
        console.log(event.target.name)
        console.log(event.target.value)
        const update = items.map(prevState => {
                if(prevState.name === event.target.name){
                        prevState.value = prevState.value +1;                    
                }
                return prevState;
            })
        setItems(update)
    }

    function decrement(event){
        console.log(event.target.name)
        console.log(event.target.value)
        const update = items.map(prevState => {
                if(prevState.name === event.target.name){
                    if(prevState.value > 0 ){
                        prevState.value = prevState.value -1;               
                    }        
                }
                return prevState;
            })
        setItems(update)
    }


    function calculateTotal(){
        let total=0;

        items.forEach(item=> {
            total = total + item.value*4;
        })
        return total;
    }
    function displayTotal(){
        const products = [];
        items.forEach(item => {
            if(item.value > 0) {
                products.push(item);
            }
        })
        return products;
    }

   
    const cards = items.map(item => (<Card name={item.name} key={items.indexOf(item)} value= {item.value} link={item.link} onClick={handleClick} increment={increment} decrement={decrement}/>))
    const totalCard = displayTotal().map(item=> (<TotalCard key= {displayTotal().indexOf(item)}name={item.name} value= {item.value} src={item.link}/>))
    return (
          <div className="products" >
                <div className="container">  
                    {cards}
                </div> 
                {modalIsOpen && <Modal displayTotal= {totalCard} total={calculateTotal()} />}
                {modalIsOpen && <Backdrop onClick={closeModal}/>}
          </div>
       
    )
}

export default Shop;