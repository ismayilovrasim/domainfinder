import {useNavigate} from "react-router-dom";


const SearchBar = () => {
    let navigate = useNavigate()
    return (
        <div>
            <input type="text"/>
            <button onClick={()=>{
                navigate("/results")
            }}>Search</button>
        </div>
    )
}

export default SearchBar;