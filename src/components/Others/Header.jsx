import React, { useEffect, useState } from "react";

const Header = ({handleLogout,data}) => {
 
  const greetings = [
    "Hi",
    "Hey",
    "Hello",
    "Greetings",
    "Welcome",
    "Howdy",
    "Good day",
    "Salutations",
    "Hiya",
    "What's up"
  ];
  const val = Math.floor(Math.random()*10);
  
  return (
    <div className="flex justify-between items-center">
      <div className="tracking-tighter">
        <h1 className="text-2xl">{
          val<10?
          greetings.map((item,index)=>{
            if(index===val && val<10){
              return item
            }
          }):"hey"
        }</h1>
        <h1 className="text-6xl font-[AuthorItalic]">{data && data.name} <span className="text-yellow-500 text-5xl">👋</span></h1>
      </div>
      <button onClick={()=>handleLogout()} className="bg-red-500 p-3 text-xl rounded-md hover:bg-red-600">Log Out</button>
    </div>
  );
};

export default Header;
