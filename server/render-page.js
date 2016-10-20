
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
			  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
			</head>
			<body>
				<div id="myApp">${appMarkup || ""}</div>
			  <script src="/bundle.js"></script>
			  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
			</body>
		</html>`;
}
