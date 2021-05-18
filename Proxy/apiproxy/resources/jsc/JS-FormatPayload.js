var resource = context.getVariable("urirequest.table");
var tableRecords = JSON.parse(context.getVariable("extension-output"));
var result;

print("tableRecords: ", tableRecords);

// Firestore doesn't return items in same order, every time => alphabetical sort
if (Array.isArray(tableRecords)) {
    print("list");
    var arraySorted = [];
    tableRecords.forEach(obj => {
        var ordered = {};
        Object.keys(obj.data).sort().forEach(function(key) {
            ordered[key] = obj.data[key];
        });
        arraySorted.push(ordered);
    });
    // Add collection name, required by Appsheet for table 
    result = '{"' + resource+'":' + JSON.stringify(arraySorted) + '}';
} else {
    print("item");
    var ordered = {};
    Object.keys(tableRecords).sort().forEach(function(key) {
            ordered[key] = tableRecords[key];
        });
    // Don't add collection name for object 
    result = JSON.stringify(ordered);
}

context.setVariable("result", result);
