import React from "react";
import "./responsiveGrid.css";
import logo from "./../images/golden-shoe-text.jpg";
import redShoe from "./../images/red-shoe-small.jpg";
import blueHeels from "./../images/blue-heels.jpg";
import blackBoots from "./../images/black-boots.jpg";
import multiTrainers from "./../images/multicolour-trainers.jpg";
import whiteShoes from "./../images/white-shoes.jpg";

function ResponsiveGrid() {
  let data = [
    {
      id: 1,
      imgSrc: logo,
    },
    {
      id: 2,
      imgSrc: redShoe,
    },
    {
      id: 3,
      imgSrc: blueHeels,
    },
    {
      id: 4,
      imgSrc: blackBoots,
    },
    {
      id: 5,
      imgSrc: multiTrainers,
    },
    {
      id: 6,
      imgSrc: whiteShoes,
    },
  ];

  return (
    <>
      <div></div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ResponsiveGrid;
