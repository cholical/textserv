var sendTestMessage = function (twilio) {
	twilio.messages.create({
		body: "Yo, this is a test message",
		to: "19194577058",
		from: "19192898555"
	}, function (err, data) {
		if (err) {
			console.log("Twilio error");
			console.log(err);
		} else {
			res.send({
				status: 200,
			})
		}
	});
}

var sendToList = function (list_id, user_id, message_body, tools, sql, _, twilio, res) {
	var numbersList = [];
	var escapedMessageBody = tools.escapeString(message_body);
	var firstQuery = "SELECT people.number FROM lists INNER JOIN listpeople ON lists.list_id = listpeople.list_id INNER JOIN people ON listpeople.person_id = people.person_id WHERE lists.user_id = '" + user_id + "' AND lists.list_id = '" + list_id + "';";
	sql.query(firstQuery, function (err, firstRecordset) {
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			_.forEach(firstRecordset, function (person) {
				twilio.messages.create({
					body: message_body,
					to: person.number,
					from: "19192898555"
				}, function (err, data) {
					if (err) {
						console.log("Twilio error");
						console.log(err);
					}
				});
			});
			var secondQuery = "INSERT INTO messages (user_id, list_id, message_body) VALUES ('" + user_id + "', '" + list_id + "', '" + escapedMessageBody + "');";
			sql.query(secondQuery, function (err, secondRecordset) {
				if (err) {
					console.log(query);
					console.log(err);
				} else {
					res.send({
						status: 200
					});
				}
			});
		}
	});
}

module.exports.sendToList = sendToList