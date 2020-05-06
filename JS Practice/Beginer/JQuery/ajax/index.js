(function ($) {
    function data_load() {
        return new Promise(function (resolve, reject) {
            var srcUrl = 'https://www.graphqlbin.com/v2/mqZgc5';
            var queryStr = JSON.stringify({
                query: "{\n\t\t\t\tme{\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}"
            });
            $.ajax({
                url: srcUrl,
                type: 'post',
                dataType: 'json',
                data: queryStr,
                success: function (res) {
                    resolve(res.data);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    }
    data_load()
        .then(function (data) {
        console.log(data.me.name);
    })["catch"](function (err) {
        console.log("Error " + err.status);
    });
})($);
