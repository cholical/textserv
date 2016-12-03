var getDashboard = function (userId, sql, _, res) {
	var query = "SELECT list_id, list_name, list_description FROM lists WHERE user_id = '" + userid + "';";
	sql.query(query, function (err, recordset) {
		console.log("Getting lists");
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			res.send({
				status: 200,
				lists: recordset
			});
		}
	});
}

var createList = function (userId, listName, listDescription, sql, _, res) {
	var query = "INSERT INTO lists (user_id, list_name, list_description) VALUES ('" + userid + "', '" + listName + "', '" listDescription + "');";
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

var deleteList = function (userId, listId, sql, _, res) {
	var query = "DELETE FROM lists WHERE list_id = '" + listId + "' AND user_id = '" + userId + "'; DELETE FROM listpeople WHERE list_id = '" + listId + "';";
	//Does not delete from the people table so it is possible for a person to not be in any list
	sql.query(query, function (err, recordset) {
		console.log("Deleting list");
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

module.exports.getDashboard = getDashboard;
module.exports.createList = createList;
module.exports.deleteList = deleteList;