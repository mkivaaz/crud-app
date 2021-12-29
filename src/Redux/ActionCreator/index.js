export const sortBy = (field) => {
    return (dispatch) => {
        dispatch({
            type: "Sort",
            payload: field
        })
    }
}