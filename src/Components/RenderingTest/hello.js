import React from 'react';

// Home Component..
const Hello = (props) => {
   if (props.name && !props.age) {
       return <h2>Hey, {props.name}!</h2>;

   }else if(props.age && !props.name) {
       return <h2>Hey, you are 22!</h2>;

   }else if(props.name && props.age){
       return <h2>Hey, {props.name} and you are {props.age}!</h2>;

   }else{
       return <h2>Hey, Stranger!</h2>;
   }
};

export default Hello;