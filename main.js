//input declared in data.js

var output = normilize(input, true);

console.log(output);

function normilize(obInput, sort) {
    var res = [];
    for (var prop in obInput) {
        var data = obInput[prop];
        Object.keys(data).map(function(key, i) {
            res.push(new Item(prop, key, data[key]));
        });
    }

    res = res.filter(item => item.value > 0);

    if (sort === true) {
        res = res.sort(function(a, b) {

            if (a.value < b.value) {
                return 1;
            }
            if (a.value > b.value) {
                return -1;
            }
            return 0;
        });
    }

    return res;

    function Item(pId, sId, obData) {
        this.projectId = String(pId);
        this.sceneId = String(sId);
        this.value = Number(obData.value);
        this.title = String(obData.title);
    };
}