export const firebaseLooper = (snapshot) => {
    const data = [];

    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });

    return data;
}