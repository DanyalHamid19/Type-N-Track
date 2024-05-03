import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

const array1 = [];


// const arr =[ {
//       id: 0,
//       name: "hassnain",
//       marks:70
//     },
//     {
//       id: 1,
//       name: "daniyal",
//       marks: 50
//     },
//     {
//       id: 2,
//       name: "omar",
//       marks: 40
//     },
//     {
//       id: 3,
//       name: "anas",
//       marks: 30
//     }]

   

function App() {


  // let a =arr.map(({id,name})=>{
  //   return (`name:${name} id= ${id}`)
  // })
  // console.log(a);
  

  // let b=arr.filter(({id,name,marks})=>{
  //   return(marks<=50);
  // })

  // console.log(b);



  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleText = () => {
    // console.log(text);
    array1.push(text);
    console.log(array1);
    setText("");
  };
  const search = () => {
    const check = array1.includes(text);
    console.log(check);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Container
        style={{
          backgroundColor: "#ADD8E6",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {data.map((item, index) => {
          console.log('item', item,index);
          return <h2>{item?.name}</h2>;
        })} */}

        <h2>Write Anything Below And check It on Console</h2>
        <TextField
          label="Write Anything"
          variant="outlined"
          value={text}
          style={{ width: "30%" }}
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" onClick={handleText}>
          ADD
        </Button>
        <br />
        <Button variant="contained" onClick={search}>
          Search
        </Button>
      </Container>
    </div>
  );
}

export default App;
