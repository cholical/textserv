var escapeString = function (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char;
        }
    });
}

var generateToken = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 16; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

var verifySession = function (username, token, user_id, _, sessions) {
    var session = _.find(sessions, function (singleSession) {
        return singleSession.username == username && singleSession.token == token && singleSession.user_id == user_id;
    });
    console.dir(sessions);
    console.log(session);
    if (session) {
        return true;
    } else {
        return false;
    }
}

module.exports.escapeString = escapeString;
module.exports.generateToken = generateToken;
module.exports.verifySession = verifySession;