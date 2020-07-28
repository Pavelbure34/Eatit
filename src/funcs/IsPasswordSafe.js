const IsPasswordSafe = (text)=>{
    //this function verifies password safety.
    const trimmed = text.trim() //it trims down the white space.
    const n = trimmed.length;   //it checks whether it is more than 8 characters.
    let letterNumber = /^[0-9a-zA-Z]+$/;
    return (trimmed.match(letterNumber) && n >= 8)?true:false;
};

export {IsPasswordSafe};
