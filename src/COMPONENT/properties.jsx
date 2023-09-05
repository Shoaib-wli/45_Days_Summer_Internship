import React from "react";
// const Properties=({firstName,lastName,firstName1,lastName1,firstName2,lastName2})=>{
//     return(
//         <>
//         {firstName}
//         {lastName}
//         {firstName1}
//         {lastName1}
//         {firstName2}
//         {lastName2}
//         </>
//     )
// }
// const Properties=(props)=>{
//     return(
//         <>
//         {props.myName }
//         {props.age}
//         {props.email}
//         </>
//     )
// }
const Properties=(person)=>{
    return(
        <>
        
        {person.Myname }
        {person.age}
        {person.email}
        </>
    )
}

export default Properties;