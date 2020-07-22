const IsPasswordSafe = (text)=>{
    //this function verifies password safety.
    const trimmed = text.trim() //it trims down the white space.
    const n = trimmed.length;   //it checks whether it is more than 8 characters.
    // let Numbers = /^[0-9]+$/; //regular expressions for checking safety.
    // let Letters = /^[a-zA-Z]+$/; //regular expressions for checking safety.
    let letterNumber = /^[0-9a-zA-Z]+$/;
    // if (n >= 8)
    //     if (trimmed.match(Numbers))
    //         if (trimmed.match(Letters))
    //             return true;
    //         else
    //             return false;
    //     else
    //         return false;
    // else
    //     return false;
    return (trimmed.match(letterNumber) && n >= 8)?true:false;
};

export {IsPasswordSafe};
