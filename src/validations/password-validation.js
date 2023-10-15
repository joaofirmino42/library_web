const passwordValidation = (value) => {
    if (value.trim().length < 8) {
        return 'Please enter at least 8 characters.';
    }
    else if (value.trim().length > 20) {
        return 'Please enter a maximum of 20 characters.';
    }
    else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)  (?=.* [!@#$ *]) /.test(value.trim())) {
        return 'Please enter at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.'
    }
    return true;
}
export default passwordValidation;