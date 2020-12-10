function parseJSONAsync(json, callback) {
    setTimeout(() => {
        try {
            console.log(JSON.parse(json))
            callback(null, JSON.parse(json))
        } catch (err) {
            callback(err)
        }

    }, 1000)
}

//parseJSONAsync("illegal json",
  //  (err, result) => console.log("parsed result", err, result))

parseJSONAsync('{"message":"hello","to":"world"}',
    (err, result) => console.log("parsed result", err, result))
