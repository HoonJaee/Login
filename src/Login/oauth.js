import React, { Component } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

class oauth extends Component {
    render() {
        return (
            <div>
                
                <GoogleOAuthProvider clientId="747544358225-cliti36gojm9b64tmdqekua43gafqav3.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            var decoded = jwt_decode(credentialResponse.credential);
                            console.log(decoded);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />

                </GoogleOAuthProvider>;
            </div>
        );
    }
}

export default oauth;