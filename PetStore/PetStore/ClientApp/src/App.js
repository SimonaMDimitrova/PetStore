import React, { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';

import firebase from './utils/firebase';
import AuthContext from './contexts/AuthContext';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser);
    }, []);

    const authInfo = {
        isAuthenticated: Boolean(user),
        email: user?.email,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            <Layout />
        </AuthContext.Provider>
    );
}

export default App;
