import type {FilterOptions} from "../types.ts";

const FilterTasksButtons = ({filterChoice, setFilterChoice}: {filterChoice: FilterOptions, setFilterChoice: (filterChoice: FilterOptions) => void}) => {
    return (
        <>
            <button
                onClick={()=>
                    setFilterChoice("All")}
                style={{backgroundColor: filterChoice === "All" ? "blue" : "white", color: filterChoice === "All" ? "white" : "black"}}>
                Show all tasks
            </button>
            <button onClick={()=> setFilterChoice("Uncompleted")} style={{backgroundColor: filterChoice === "Uncompleted" ? "blue" : "white", color: filterChoice === "Uncompleted" ? "white" : "black"}}>Show uncompleted tasks</button>
            <button onClick={()=> setFilterChoice("Completed")} style={{backgroundColor: filterChoice === "Completed" ? "blue" : "white", color: filterChoice === "Completed" ? "white" : "black"}}>Show completed tasks</button>
        </>
    )
}
export default FilterTasksButtons;