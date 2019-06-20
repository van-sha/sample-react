const toCamelCase = function(str){
    return str.replace(/\s+(.)/g, function (match, group) { 
        return group.toUpperCase()  
    })
};
const toSentenceCase = function(str) {
    var result = str.replace( /([A-Z])/g, " $1" );
    return result.charAt(0).toUpperCase() + result.slice(1);
}
export {
    toCamelCase,
    toSentenceCase,
};
