const emailValidation = (value) => {
    if (value.trim().length == 0) {
        return 'Please provide email.'
    }
    else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(value.trim())) {
        return 'Please provide a valid email address.'
    }
    return true;
}
export default emailValidation;
