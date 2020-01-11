import React, {useState} from 'react';

const Search =(props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChange =(event) => {
        setSearchValue(event.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (event) => {
        event.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className='search'>
            <input value={searchValue}
            onChange={handleSearchInputChange}
            type='text' placeholder='searh the movie' />

            <input onClick={callSearchFunction} type='submit'/>

        </form>
    );
}

export default Search;