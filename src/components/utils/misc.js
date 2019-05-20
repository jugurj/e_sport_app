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

export const validate = (element) => {
    let error = [true, ''];

    if (element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Oops! Looks like email is invalid' : ''}`
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field should be not empty' : ''}`
        error = !valid ? [valid, message] : error;
    }

    return error;
}