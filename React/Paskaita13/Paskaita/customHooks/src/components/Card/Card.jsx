import React from "react";

function Card({ children, title }) {
  const childrenArray = React.Children.toArray(children); // pavercia children i Array is kurio galima imt po viena elementa
  //   console.log(children);
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
      <div>{childrenArray[0]}</div>
    </div>
  );
}

function Header({ text }) {
  return (
    <>
      <h1>{text}</h1>
      <hr />
    </>
  );
}

// export default Object.assign(Card, Header); // sitas metodas neveike

Card.Header = Header;

export default Card;
