
export default function renderPage(title, appMarkup) {

	return `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
			  <meta http-equiv="X-UA-Compatible" content="IE=edge">
			  <meta name="viewport" content="width=device-width, initial-scale=1">
			  <meta name="description" content="">
			  <meta name="author" content="">
			  <title>${title || "Sucker"}</title>
			  <!-- Custom Fonts -->
			  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
			</head>
			<body>
				<div id="myApp">${appMarkup || ""}</div>
			  <script src="/dist/bundle.js"></script>
			</body>
		</html>`;
}
