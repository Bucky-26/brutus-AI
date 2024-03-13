var axios = require("axios").default;

var options = {
	method: "POST",
	url: "https://us-central1-ai-writer-a4f99.cloudfunctions.net/chatgptv3-withfreeFlutterV2-1",
	headers: {
		"Content-Type": "application/json",
		"User-Agent": "insomnia/8.6.1",
		Authorization:
			"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwOWY4ZTMzN2ZjNzg1NTE0ZTExMGM2ZDg0N2Y0M2M3NDM1M2U0YWYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWRvbmlzIEpyLiBTYW4gSnVhbiBTYW5jaGV6IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pWcDZvWEZCUkFnNUI4V1JpZEhpSVhibmVYeWRWY2VOSFFwcThiV2ZlbnpRVT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9haS13cml0ZXItYTRmOTkiLCJhdWQiOiJhaS13cml0ZXItYTRmOTkiLCJhdXRoX3RpbWUiOjE3MTAzMzk3MDcsInVzZXJfaWQiOiJCelFuaDU0ZjNPZnNxbTQ1TGRKdDBUU2VrVHgxIiwic3ViIjoiQnpRbmg1NGYzT2ZzcW00NUxkSnQwVFNla1R4MSIsImlhdCI6MTcxMDMzOTcwNywiZXhwIjoxNzEwMzQzMzA3LCJlbWFpbCI6ImFkb25pc2pyc2FuanVhbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODc3Njg0Mjk0ODI5OTkwMzYxNCJdLCJlbWFpbCI6WyJhZG9uaXNqcnNhbmp1YW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.0YHAPUBQpGSZszyI_OO1eOkU1NpdcHvXy2k_8C0pDSoj4ZHJnjsMF3XKlQsjTVaBRNWhV9YaVw5DbepAQnjvsoiKLd55j6yfNKMVtnHdMSJmhpFCHciLtJnjv8juh0hwCRX6odywqsH-lLIea-NtkV7FCgGEKR2yzy_DuSMoVWmMDoSnQpMG5LrUMH3PX2ITn__ry_P8CNRvNwUmXfdlN-XAcdLh3UrjiMKJQB0MmBVXyxyX9q3XskbXz6Z6cVgqKCbpzafM0y93-2Xv3PZtnAxa06ZUKbwdXBiGJZiKyUOX_TaIqgjqWvibBslA76-hc6EZGzhWCCSm3jbs9c1rZQ",
	},
	data: {
		text: "you are Zie AI",
		user: "BzQnh54f3Ofsqm45LdJt0TSekTx1",
		history: [{ role: "user", content: "what ai are you?" }],
		model: 0,
		plugins: ["All"],
		instruction1: "",
		instruction2: "",
		app_version: "Web Browser",
		platform: "Web Browser",
		fileAdded: "False",
		sessionId: "49d9f5cc-73bc-411b-a9bb-27989260689e",
		selectedOption: "All",
	},
};

axios
	.request(options)
	.then(function (response) {
		const rawdata = response.data;

		const dataArray = rawdata.split(/\r?\n/);

		const contentArray = dataArray
			.map((entry) => {
				let cleanedEntry = entry.trim(); 
				if (cleanedEntry.startsWith("{")) {
					try {
						const obj = JSON.parse(cleanedEntry);
						if (obj.content) {
							return obj.content.trim(); 
						}
					} catch (error) {
						console.error("Error parsing JSON:", error);
					}
				}
				return ""; 
			})
			.filter(Boolean); 

		let contentData = contentArray.join(" ");

		contentData = contentData.replace(
			"https :// br ut us ai .com /downloads . .",
			"https://brutusai.com/downloads..",
		);

		console.log("content", contentData);
	})
	.catch(function (error) {
		console.error(error);
	});
