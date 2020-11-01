export const createProject = (project) => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        //make async call to DB
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Ricardo',
            authorLastname: 'Grijalva',
            authorId: 1514,
            createdAt: new Date()
            //create a promise with then() that fires when async DB call ends
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project: project});
            //a catch when is an error
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
        
    }
}