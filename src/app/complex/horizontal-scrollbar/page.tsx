import HorizontalScrollBar from "@/app/components/screens/HorizontalScrollBar";
import React from "react";

const HorizontalScollBarPage = () => {
  const categories = [
    "Vlogging",
    "Tech Reviews",
    "Unboxing",
    "Tutorials",
    "Gaming",
    "Travel",
    "Food",
    "Beauty",
    "Fashion",
    "Fitness",
    "Education",
    "Science",
    "DIY",
    "Art",
    "Comedy",
    "Music",
    "ASMR",
    "Podcasts",
    "Productivity",
    "Motivation",
    "Parenting",
    "Pets",
    "Film Reviews",
    "Book Reviews",
    "Finance",
    "Lifestyle",
    "Pranks",
    "Memes",
    "Cars",
    "Sports",
  ];
  const users = new Array(20).fill(0).map((item,index) => {
    return{
      id:index,
      userName:  `u#${index}`,
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`
    }
  })
  console.log("users :",  users)
  return (
    <div>
      <h1 className="text-blue-800 text-2xl">Youtube categories</h1>
      <HorizontalScrollBar >
        {
          categories?.map((item,index) => (
            <div className="border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400 cursor-pointer" key={index}>
              <h1>{item}</h1>
            </div>
          ))
        }
      </HorizontalScrollBar >
      <br/>
      <br/>

      <h1 className="text-blue-800 text-2xl">Instagram Stories</h1>

          <HorizontalScrollBar >
        {
          users?.map((item,index) => (
            <div className="shrink-0" key={index}>
              <img src={item?.image} alt={item?.userName} className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200"/>
            </div>
          ))
        }
      </HorizontalScrollBar >
    </div>
  );
};

export default HorizontalScollBarPage;
