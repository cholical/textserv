var getMessages = function (user_id, sql, _, res) {
	var query = "SELECT messages.message_id, messages.list_id, messages.message_body, messages.date, lists.list_name FROM messages INNER JOIN lists ON messages.list_id = lists.list_id WHERE messages.user_id = '" + user_id + "';";
	sql.query(query, function (err, recordset) {
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

module.exports.getMessages = getMessages;