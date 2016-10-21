export default function renderPage(title, appMarkup, appSrc) {
	if (!appSrc) throw new Error("missing appSrc");
	
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
				<div id="root">${appMarkup || ""}</div>
				<script type="text/javascript">
					function downloadJSAtOnload() {
						const element = document.createElement("script");
						element.src = "${appSrc}";
						document.body.appendChild(element);
					}
					if (window.addEventListener) {
						window.addEventListener("load", downloadJSAtOnload, false);
					}	else if (window.attachEvent) {
						window.attachEvent("onload", downloadJSAtOnload);
					} else {
						window.onload = downloadJSAtOnload;
					}
				</script>
			  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
			</body>
		</html>`;
}
