const appId = "4meFA2aJGs1qCBnuYTJgfdIkqjXCU13XuUpABApn";
const javaScriptKey = "Ld4BMsH2f3q6DcvscsMIN7ZS8IXnLjeBxvO5jNQY";

export async function sendFeedback(data) {
	const response = await fetch("https://parseapi.back4app.com/classes/feedback", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appId,
			"X-Parse-JavaScript-Key": javaScriptKey,
			"X-Parse-Revocable-Session": "1",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	console.log(response);
	return response;
}
