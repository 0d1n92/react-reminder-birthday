import React from 'react';

const List = (props) => {
const {people} = props;
return people.map((person, index)=>{
  return (
    <div className="person">
        <img src={person.image} alt={"persona" + index} />
        <h4>{person.name}</h4>
        <p>{person.age}</p>
    </div>
  )

})
};

export default List;
