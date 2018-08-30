const Search = (props) => {
	return (
		<div>
			<label>Search: </label> <input type ="search" placeholder="Search..." onKeyUp={props.onKeyUp} value= {props.name}/> 
		</div>
	);
};

export default Search;