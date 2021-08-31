import React from "react"
import TrelloCard from "./TrelloCard"

function TrelloList({title}) {
    return (
    <div style={style.container}>
      <h4>{title}</h4>
      <TrelloCard/>
      </div>
    );
  }

  const style = {
    container:{
        backgroundColor :"#ccc",
        borderRadius:3,
        width: 300,
        padding: 8
    }
  }

  export default TrelloList