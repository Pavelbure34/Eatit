const ClearWhiteSpace = (text)=>text.replace(" ", "");
const ProperizeInput = (text)=>ClearWhiteSpace(text).toLowerCase();

export {ProperizeInput, ClearWhiteSpace};
