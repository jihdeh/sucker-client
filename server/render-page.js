
export default function renderPage() {

	return `<!DOCTYPE html>
		<html dir="rtl" lang="ar">
			<head>
				<meta charset="utf-8">
			  <meta http-equiv="X-UA-Compatible" content="IE=edge">
			  <meta name="viewport" content="width=device-width, initial-scale=1">
			  <meta name="description" content="">
			  <meta name="author" content="">
			  <title>Sucker</title>
			  <!-- Custom Fonts -->
			  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
			  <link href="/lib/Materialize/dist/css/materialize.min.css" rel="stylesheet">
			</head>
			<body>
				<div id="myApp"></div>
			  <script href="/lib/Materialize/dist/js/materialize.min.js"></script>
			  <script src="/dist/bundle.js"></script>
			</body>
		</html>`;
}
