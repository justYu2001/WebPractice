(function($) {
  function data_load() {
    return new Promise((resolve, reject) => {
      const srcUrl = 'https://www.graphqlbin.com/v2/mqZgc5';
      const queryStr = JSON.stringify({
        query: `{
				me{
					name
				}
			}`
      });
      $.ajax({
        url: srcUrl,
        type: 'post',
        dataType: 'json',
        data: queryStr,
        success: res => {
          resolve(res.data);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }
  data_load()
    .then(data => {
      console.log(data.me.name);
    })
    .catch(err => {
      console.log(`Error ${err.status}`);
    });
})($);
