import React from "react";

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends React.Component {

  componentDidMount() {
    // window.fbAsyncInit = () => {
    //   FB.init({
    //     appId: window.FACEBOOK_APP_ID || facebook.client_id,
    //     xfbml: true,
    //     version: facebook.version
    //   });

    //   // Use this call just to login when cookie was cleared, do not logout
    //   if (!LoginStore.getState().user) {
    //     LoginActions.defensiveCheckLoginState();
    //   }
    // };
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
}

export default App;
