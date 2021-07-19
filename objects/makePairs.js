const makePairs3 = (object) => {
    const result = [];
  
    for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        result.push([prop, object[prop]]);
      }
    }
  
    return result;
};

module.exports = {
    makePairs3,
}