import React from "react";
import "./List.css";

const List = ({ userData }) => {
  return (
    <>
      {userData.map((item) => {
        return (
          <article key={item.id} className="person">
            <img className="person_image" src={item.image} alt={item.name} />
            <div>
              <h3 className="person_name">{item.name}</h3>
              <p className="person_age">{item.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
