
import { useEffect, useState } from 'react';
import './Suggestions.css';
import { getSuggestions } from '../../api/suggestions'
function Suggestions() {

    const [searchField , setSearchField] = useState('');
    const [suggestions , setSuggestions] = useState([]);

    useEffect(() =>{
        getSuggestions(searchField).then((suggestions) => {
            setSuggestions(suggestions);
        })

    },[searchField])
    return (
        <div className="wrapper">
            <input onChange={ (e) => setSearchField(e.target.value)  }></input>
            <button className="btn">
                Search
            </button>
            {
                suggestions.length > 0 && (
                    <div className="suggestions">
                        {
                            suggestions.map( suggestions => (<div>{ suggestions }</div>))
                        }
                    </div>  
                )
            }
        </div>
    );
}

export default Suggestions;
