export const createProject = (project) => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        //make async call to DB
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Ricardo',
            authorLastname: 'Grijalva'

        })
        dispatch({type: 'CREATE_PROJECT', project: project});
    }
}
