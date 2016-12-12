var getDashboard = function (user_id, sql, _, res) {
	var query = "SELECT list_id, list_name, list_description FROM lists WHERE user_id = '" + user_id + "';";
	sql.query(query, function (err, recordset) {
		console.log("Getting lists");
		if (err) {
			console.log(query);
			console.log(err);
			res.sendStatus(500);
		} else {
			console.log(recordset);
			res.send({
				status: 200,
				lists: recordset
			});
		}
	});
}

var createList = function (user_id, list_name, list_description, tools, sql, _, res) {
	var escapedListName = tools.escapeString(list_name);
	var escapedListDescription = tools.escapeString(list_description);
	var query = "INSERT INTO lists (user_id, list_name, list_description) VALUES ('" + user_id + "', '" + escapedListName + "', '" + escapedListDescription + "');";
	sql.query(query, function (err, recordset) {
		console.log("Adding new list");
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			res.send({
				status: 200
			})
		}
	});
}

var deleteList = function (user_id, list_id, sql, _, res) {
	var query = "DELETE FROM lists WHERE list_id = '" + list_id + "' AND user_id = '" + user_id + "';";
	//Does not delete from the people table so it is possible for a person to not be in any list
	sql.query(query, function (err, recordset) {
		console.log("Deleting list");
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			query = "DELETE FROM listpeople WHERE list_id = '" + list_id + "';";
			sql.query(query, function (err, recordset) {
				console.log("Deleting list pt 2");
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

var openList = function (user_id, list_id, sql, _, res) {
	var firstQuery = "SELECT list_name, list_description FROM lists WHERE list_id = '" + list_id + "' AND user_id = '" + user_id + "';";
	sql.query(firstQuery, function (err, firstRecordset) {
		console.log("Getting list name and description");
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			var secondQuery = "SELECT lists.list_id, people.person_id, people.first_name, people.last_name, people.number FROM lists INNER JOIN listpeople ON lists.list_id = listpeople.list_id INNER JOIN people ON listpeople.person_id = people.person_id WHERE lists.list_id = '" + list_id + "';";
			sql.query(secondQuery, function (err, secondRecordset) {
				console.log("Getting people in list " + list_id);
				if (err) {
					console.log(query);
					console.log(err);

				} else {

					res.send({
						status: 200,
						list_name: firstRecordset[0].list_name,
						list_description: firstRecordset[0].list_description,
						people: secondRecordset
					});
				}
			});
		}
	});
}

//###
var sendMessage = function (user_id, list_id, message_body, date, tools, sql, _, res) {
	var escapedMessageBody = tools.escapeString(messageBody);
	var date = new date(); //need verify 
	var query = "INSERT INTO messages (user_id, list_id, message_body, date) VALUES ('" + user_id + "', '" + "list_id"+escapedMessageBody+ "', '" + date+ "');";
	sql.query(query, function (err, recordset) {
		console.log("Adding new message");
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			res.send({
				status: 200
			})
		}
	});
}
//message 
var getMessages = function (user_id, sql, _, res) {
	var query = "SELECT messages.message_id, messages.list_id, messages.message_body, messages.date, lists.list_name FROM messages INNER JOIN lists ON messages.list_id = lists.list_id WHERE messages.user_id = '" + user_id + "';";
	sql.query(query, function (err, recordset) {
		console.log("#######");
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			res.send({
				status: 200,
				messages: recordset
			})
		}
	});
}

module.exports.getDashboard = getDashboard;
module.exports.createList = createList;
module.exports.deleteList = deleteList;
module.exports.openList = openList;
//###
module.exports.sendMessage = sendMessage;
//###
module.exports.getMessages = getMessages;

