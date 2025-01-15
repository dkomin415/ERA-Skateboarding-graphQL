// cycles each property into unique variations
let cycle = (type, property, propertyName) => {
    let returnedObj = [];

    for (let i = 0; i < type.length; i++) {
        for (let j = 0; j < property.length; j++) {
            let obj = { };
            obj = {
                type: type[i]
            };

            obj[propertyName] = property[j];
            
            if (obj.type === "none") {
                i += 1;
                j = 0;
            } else if (
                obj[propertyName] === 0 ||
                obj[propertyName].numberType === "none"
            ) {
                j++;
                obj[propertyName] = property[j];
            }
            returnedObj.push(obj);
        }
    }
    return returnedObj;
};

export default cycle;