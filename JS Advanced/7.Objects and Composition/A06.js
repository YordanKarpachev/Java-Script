function solve(json){
    let parsed = JSON.parse(json);
    let columnNames = Object.keys(parsed[0]);
    let result = '<table>\n';
    let values = parsed.map(obj => Object.values(obj));


    appendHeaders(columnNames);
    appendValues(values);
    result += '</table>';
    function appendValues(values){
        for(let value of values){
            result += '    <tr>'
            result += `<td>${escape(value[0])}</td><td>${escape(value[1])}</td>`
            result += '</tr>\n';
        }
    }

    

    function appendHeaders(columnNames){
        result += '    <tr>'
        for(let columnName of columnNames){
            result += `<th>${columnName}</th>`
        }
        result += '</tr>\n';
    }

    function escape(value){
      return  value.toString().replace('<', '&lt;').replace('>', '&gt;');
    }

console.log(result);
}


solve(`[{"Name":"Stamat",
        "Score":5.5},
        {"Name":"Rumen",
        "Score":6}]`);