exports.timeValidator = (inputTime) => {
    const regex = /^(1[012]|[1-9]|0[1-9]):[0-5][0-9](\s)(AM|PM)$/i;
    if (regex.test(inputTime)) return true;
    return "Please enter time in correct format!";
}

