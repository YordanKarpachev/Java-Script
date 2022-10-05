function solve(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let validPatternUri = /^[\w.]+$/g;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let specialCh = ['<', '>', '\\', '&', "'", '"'];


    if (!obj.hasOwnProperty("method") || !validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!obj.hasOwnProperty("uri") || obj.uri == "" || (obj.uri !== "*" && !obj.uri.match(validPatternUri))) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!obj.hasOwnProperty("version") || !validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (!obj.hasOwnProperty("message") ) {
        throw new Error("Invalid request header: Invalid Message");
    }
    
        for (let ch of obj.message){
            if(specialCh.includes(ch)){
                throw new Error("Invalid request header: Invalid Message")
            }
        }
    return obj


}


solve({
    method: 'POST',
    uri: '*',
    version: 'HTTP/1.1',
    message: ''
})