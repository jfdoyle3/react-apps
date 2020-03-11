const initState={
    posts: [
        {id: '1', title: 'Walk around the city', body: 'my journeys around around the city'},
        {id: '2', title: 'Hike in the Mountains', body: 'Hiking logs'},
        {id: '3', title: 'Biking off Road', body: 'Biking milage and routes'},
       
    ]
}
const rootReducer=(state=initState,action) => {
    return state
}

export default rootReducer