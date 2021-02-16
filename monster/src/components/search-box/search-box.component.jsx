
import './search-box.style.css'

export const SearchBox = (props) => (
    <input 
    type = 'search' 
    placeholder = 'Search Monsters'
    onChange = {props.onSearchChange} 

    />
)