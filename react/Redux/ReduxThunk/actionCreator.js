//Action creator with redux-thunk
function fetchData() {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_BEGIN" });
    return fetch("https:api.com")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: json }))
      .catch((error) => dispatch({ type: "FETCH_DATA_FAILURE", error }));
  };
}
