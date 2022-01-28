import React, {Component} from 'react';


// define sneakerCard component

const SneakerCard = (props)=>{
const {card} = props;

      return (
        <div style={styles.container}>
            <h3>{card.name}</h3>
            <img src = {card.img} style={styles.size}/>
            <div className='words' style={styles.text}>
            <p>Colorway: {card.colorway}</p>
            <div className='money'>
            <p>Retail Price: {card.retailPrice} USD</p> 
            </div>
            </div>
                <button onClick={()=>myFunction}>ADD TO CART</button>   
        </div>
      )
}


const styles = {
    container : {
        display: 'flex',
        flexDirection: 'column',
        borderStyle : 'solid',
        borderWidth: 'medium',
        // justifyContent: 'center',
        backgroundColor: 'pink',
        boxShadow: '5px 5px 20px' 
    },
    size :{
        width: '150px',
        height: '150px',
    },
    text : {
        fontFamily: 'Monospace'
    }
}
export default SneakerCard;