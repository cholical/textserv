var addPerson = function (list_id, first_name, last_name, number, tools, sql, _, res) {
	var escapedFirstName = tools.escapeString(first_name);
	var escapedLastName = tools.escapeString(last_name);
	var firstQuery = "INSERT INTO people (first_name, last_name, number) VALUES ('" + escapedFirstName + "', '" + escapedLastName + "', '" + number + "');";
	sql.query(firstQuery, function (err, firstRecordSet) {
		console.log("Adding person");
		if (err) {
			console.log(query);
			console.log(err);
		} else {
			console.log("REQUIRED PLACE");
			console.dir(firstRecordSet);
			var newPersonId = firstRecordSet.insertId;
			var secondQuery = "INSERT INTO listPeople (list_id, person_id) VALUES ('" + list_id + "', '" + newPersonId + "');";
			sql.query(secondQuery, function (err, secondRecordset) {
				if (err) {
					console.log(query);
					console.log(err);
				} else {
					res.send({
						status: 200,
					});
				}
			});
		}
	});
}

var deletePerson = function (list_id, person_id, sql, _, res) {
	var query = "DELETE FROM listpeople WHERE list_id = '" + list_id + "' AND person_id = '" + person_id + "'; DELETE FROM people WHERE person_id = '" + person_id + "';";
	sql.query(query, function (err, recordsert) {
		console.log("Deleting person");
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

module.exports.addPerson = addPerson;
module.exports.deletePerson = deletePerson;