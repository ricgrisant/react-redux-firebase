export const createProject = (project) => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        //make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstname: profile.firstName,
            authorLastname: profile.lastName,
            authorId: authorId,
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