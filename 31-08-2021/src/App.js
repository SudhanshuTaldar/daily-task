import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function App() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
       <User />
    </AppContext.Provider>
  );
}

export default App;


// Fetch data using useEffect

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const App = () => {
//     const [advice, setAdvice] = useState("");
//     let [val, setVal] = useState(1);

//     // const ChangeVal = () => {
//     //     val++;
//     // }


//     useEffect(() => {
//         const url = `https://api.adviceslip.com/advice`;
    

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const json = await response.json();
//                 console.log(json);
//                 console.log(json.slip.advice);
//                 setAdvice(json.slip.advice);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, [val]);

//     return (
//         <Wrapper>
//             <Paragraph>{advice}</Paragraph>
            
//             {/* <Button onClick={()=>setVal(val=val+1)}> Change </Button> */}
//         </Wrapper>
//     );
// };

// export default App;

// const Wrapper = styled.div`
//     padding-top: 150px;
//     margin: 0 auto;
// `;

// const Button = styled.button `
//  width: 200px;
//  height: 50px;
//  background-color: blue;

//  &:hover {
//      background-color: coral;
//  };

// `

// const Paragraph = styled.h2`
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 20px;
//     line-height: 48px;
//     text-align: center;
// `;