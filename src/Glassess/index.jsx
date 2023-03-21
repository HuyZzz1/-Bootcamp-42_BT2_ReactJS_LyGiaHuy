import React, { useState } from "react";
import { Wrapper } from "./styled";

const data = [
  {
    id: 1,
    name: "GUCCI G8850U",
    url: "/img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    name: "GUCCI G8759H",
    url: "/img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    name: "DIOR D6700HQ",
    url: "/img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    name: "DIOR D6005U",
    url: "/img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    name: "PRADA 29",
    url: "/img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    name: "GUCCI 100",
    url: "/img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    name: "DIOR 15",
    url: "/img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    name: "DIOR 10",
    url: "/img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    name: "PRADA 12",
    url: "/img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

const Glassess = () => {
  const [glasses, setGlasses] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  return (
    <Wrapper>
      <div className="w-full py-2">
        <h1>TRY GLASSES APP ONLINE</h1>
      </div>
      <div className="w-full">
        <img
          alt="model"
          src="/img/model.jpg"
          width={300}
          height={300}
          className="position-relative"
        />
        {glasses && (
          <img
            alt="logo"
            src={glasses}
            width={200}
            height={50}
            style={{ position: "absolute", top: 150, right: "44%" }}
          />
        )}
      </div>
      {title && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 150,
          }}
        >
          <div
            style={{
              width: 300,
              textAlign: "left",
              background: "#f5f5f5",
              padding: 10,
            }}
          >
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>
        </div>
      )}

      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 30,
          paddingTop: 100,
        }}
      >
        {data.map((item) => (
          <img
            key={item.id}
            alt="logo"
            src={item.url}
            width={200}
            height={50}
            style={{ border: "1px solid black", cursor: "pointer" }}
            onClick={() => {
              setGlasses(item?.url);
              setTitle(item?.name);
              setDesc(item?.desc);
            }}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Glassess;
