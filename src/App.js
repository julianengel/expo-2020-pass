import React, { useState } from "react";
import FilterButton from "./components/FilterButton";
import Pavilion from "./components/Pavilion";

const FILTER_MAP = {
    All: () => true,
    Unseen: task => !task.completed,
    Vistited: task => task.completed,
};

const DISTRICT_MAP = {
    All: () => true,
    Mobility: task => task.district === "Mobility",
    Opportunity: task => task.district === "Opportunity",
    Sustainability: task => task.district === "Sustainability"
};

const FILTER_NAMES = Object.keys(FILTER_MAP);
const DISTRICT_NAMES = Object.keys(DISTRICT_MAP);




function App(props) {

    const [filter, setFilter] = useState('All');
    const [districtFilter, setDistrictFilter] = useState('All');
    const [pavilions, createPavilion] = useState(JSON.parse(localStorage.getItem("expo_2020_list")) ||props.pavilions);
    const pavilionList = pavilions
        .filter(FILTER_MAP[filter])
        .filter(DISTRICT_MAP[districtFilter])
        .map(pavilion => (
            <Pavilion
                    id={pavilion.id}
                    name={pavilion.name}
                    completed={pavilion.completed}
                    key={pavilion.id}
                    togglePavilionSeen={togglePavilionSeen}
                  />
        ));


    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
      />
    ));

    const districtFilterList = DISTRICT_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === districtFilter}
            setFilter={setDistrictFilter}
      />
    ));



    function togglePavilionSeen(id) {
        const updatedPavilions = pavilions.map(pavilion => {
            // if this task has the same ID as the edited task
            if (id === pavilion.id) {
                // use object spread to make a new object
                // whose `completed` prop has been inverted
                return { ...pavilion, completed: !pavilion.completed }
            }
            return pavilion;
        });
        createPavilion(updatedPavilions);
        localStorage.setItem("expo_2020_list", JSON.stringify(updatedPavilions));
    }

    const pavilionNoun = pavilionList.length !== 1 ? 'pavilions' : 'pavilion';
    const headingText = `${pavilionList.length} ${pavilionNoun}`;


    return (
        <div className="todoapp stack-large"> 
      <h1>EXPO 2020 Travel Pass</h1> 
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
         <div className="filters btn-group stack-exception">
        {districtFilterList}
      </div>
            <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {pavilionList}
      </ul>
    </div>
    );
}


export default App;