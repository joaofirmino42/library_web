const textFieldValidation = (value) => {
   
    if (value.trim().length < 10) {
        return "Please enter at least 10 characters."
    }
    else if (value.trim().length > 150) {
        return "Please enter a maximum of 150 characters."
    }
    return true;
}
export default textFieldValidation;