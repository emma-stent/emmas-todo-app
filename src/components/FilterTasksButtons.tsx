import type {FilterOptions} from "../types.ts";

const filters: { value: FilterOptions, label: string }[] = [
    { value: "All", label: "Show all tasks" },
    { value: "Uncompleted", label: "Show uncompleted tasks" },
    { value: "Completed", label: "Show completed tasks" },
];

const FilterTasksButtons = ({filterChoice, setFilterChoice}: {filterChoice: FilterOptions, setFilterChoice: (filterChoice: FilterOptions) => void}) => {
    return (
        filters.map(filter =>
            <button
                key = {filter.value}
                onClick={()=>
                    setFilterChoice(filter.value)}
                style={{backgroundColor: filterChoice === filter.value ? "blue" : "white", color: filterChoice === filter.value ? "white" : "black"}}>
                {filter.label}
            </button>
        )
    )
}
export default FilterTasksButtons;