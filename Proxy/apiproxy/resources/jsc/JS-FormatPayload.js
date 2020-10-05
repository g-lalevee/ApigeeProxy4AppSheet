var resource = context.getVariable("urirequest.table");
var tableRecords = JSON.parse(context.getVariable("extension-output"));

print("tableRecords: ", tableRecords);

// Firestore desn't return item in same order, every time => alphabetical sort
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
    tableRecords = arraySorted;
} else {
    print("item");
    var ordered = {};
    Object.keys(tableRecords).sort().forEach(function(key) {
            ordered[key] = tableRecords[key];
        });
}
// Add collection name, required by Appsheet
var result = '{"' + resource+'":' + JSON.stringify(tableRecords) + '}';

context.setVariable("result", result);
