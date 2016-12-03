var login = function (username, password, crypto, tools, sql, _, sessions, res) {
	var passwordSalt = password + "ronald";
	var passwordHash = crypto.createHash('md5').update(passwordSalt).digest('hex');
	var escapedUsername = tools.escapeString(username);
	var escapedPassword = tools.escapeString(passwordHash);
	var query = ("SELECT * FROM users WHERE username = '" + escapedUsername + "' AND password = '" + escapedPassword + "';");
	sql.query(query, function (err, recordset) {
		console.log("Login attempted");
		if (err) {
			console.log(query);
			console.log(err);
			res.sendStatus(500);
		} else {
			if (recordset.length == 1) {
				console.log("Login succeeded");
				var token = tools.generateToken();
				res.send({
					status: 200,
					token: token
				});
				_.remove(sessions, function (session) {
					return session.username == username;
				});
				var session = {
					username: username,
					token: token
				}
				sessions.push(session);
				console.log("New session saved. Username: " + username + " and token " + token);
			} else {
				console.log("Login failed");
				res.send({
					status: 401
				});
			}
		}
	});
}

module.exports.login = login;