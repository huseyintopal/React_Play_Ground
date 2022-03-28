import React from 'react'
import Message from './Message'

function Person({name, img, tel}) { // 1-bu da diğer bir yöntem en baştan yolda destructure yapıyoruz!!!
  // console.log(props);
  // const{name, img, tel} = props; //2-bunu yapmazsak aşağıdaki name img ve telin yanına props. eklenir 3--.({props.name} gibi)

  return (
    <div>
      <Message ad= {name}/>
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h3>{tel}</h3>
    </div>     
    
  )
}

export default Person









// import React from "react";
// import Message from "./Message";

// function Person({ name, img, tel }) {
//   //   const { name, img, tel } = props;
//   return (
//     <div>
//       <Message ad={name} />
//       <h2>{name}</h2>
//       <img src={img} alt="" />
//       <h3>{tel}</h3>
//     </div>
//   );
// }

// export default Person;
