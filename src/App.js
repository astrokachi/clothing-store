import React from "react";

import "./App.css";

function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const value = useSelector(selectValue);
	const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userLogged) => {
      if(userLogged){
        dispatch(login({
        }))
      }
    })
  })

  // useEffect(() => {
  // const unsubscribe = auth.onAuthStateChanged((userLogged) => {
  //   if (userLogged) {
  //     dispatch(
  //       login({
  //         uid: userLogged.uid,
  //         email: userLogged.email,
  //       })
  //     );
  //   } else {
  //     dispatch(logout());
  //   }
  // })

	const firebase = require("firebase");
	const firebaseui = require("firebaseui");

  //getting the ui
	const ui = new firebaseui.auth.AuthUI(firebase.auth());
	// firebase ui configuration
	ui.start("#firebaseui-auth-container", {
		signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
		provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
		signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
		requireDisplayName: true,
	});

	if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
		ui.start("#firebaseui-auth-container", "uiConfig");
	}

	const handleClickFalse = () => {
		console.log(value);
		dispatch(decrement());
	};

	return (
		<div className="App">
			
		</div>
	);
}

export default App;
