const input = {
    p1: {
        s1: {
            title: 'scene 1',
            description: 'description 1',
            value: 1,
        },
        s2: {
            title: 'scene 2',
            description: 'description 2',
            value: 32,
        },
        s3: {
            title: 'scene 3',
            description: 'description 3',
            value: 89,
        },
        s4: {
            title: 'scene 3',
            description: 'description 3',
            value: 0,
        },
    },
    p2: {
        s5: {
            title: 'scene 5',
            description: 'description 5',
            value: 0,
        },
        s6: {
            title: 'scene 6',
            description: 'description 6',
            value: 42,
        },
        s7: {
            title: 'scene 7',
            description: 'description 7',
            value: -9,
        },
    },
}


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
        this.projectId = pId;
        this.sceneId = sId;
        this.value = obData.value;
        this.title = obData.title;
    };
}

var output = normilize(input, true);

console.log(output);