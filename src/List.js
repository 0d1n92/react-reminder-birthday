import React from 'react';

const List = (props) => {
const {people} = props;
return people.map((person, index)=>{
  return (
    <div key={person.id} className="person">
        <img src={person.image} alt={"persona" + index} />
        <div>
          <h4>{person.name}</h4>
          <p>{person.age}</p>
        </div>
    </div>
  )

})
};

export default List;
