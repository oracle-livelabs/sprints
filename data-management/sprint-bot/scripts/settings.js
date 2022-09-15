'use strict';

/**
 * Set client auth mode - true to enable client auth, false to disable it.
 *
 * Disabling authentication is preferred for initial integration of the SDK with the web app.
 *
 * When client authentication has been disabled, only connections made from unblocked lists (allowed domains) are
 * allowed at the server. This use case is recommended when the client application cannot generate a signed JWT (because
 * of a static website or no authentication mechanism for the web/mobile app) but requires ODA integration. It can also
 * be used when the chat widget is already secured and visible to only authenticated users in the client platforms (web
 * application with the protected page).
 *
 * For other cases, it is recommended that client auth enabled mode is used when using the SDK for production as it adds
 * another layer of security when connecting to a DA/skill.
 *
 * When client authentication has been enabled, client authentication is enforced by signed JWT tokens in addition to
 * the unblocked lists. When the SDK needs to establish a connection with the ODA server, it first requests a JWT token
 * from the client and then sends it along with the connection request. The ODA server validates the token signature and
 * obtains the claim set from the JWT payload to verify the token to establish the connection.
 *
 * The Web channel in ODA must also be enabled to accept client auth enabled connections.
 */
let isClientAuthEnabled = false;

/**
 * Initializes the SDK and sets a global field with passed name for it the can
 * be referred later
 *
 * @param {string} name Name by which the chat widget should be referred
 */
function initSdk(name) {
    // Retry initialization later if the web page hasn't finished loading or the WebSDK is not available yet
    if (!document || !document.body || !WebSDK) {
        setTimeout(function() {
            initSdk(name);
        }, 2000);
        return;
    }

    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }

    let Bots;

    /**
     * SDK configuration settings
     *
     * Other than URI, all fields are optional with two exceptions for auth modes:
     *
     * In client auth disabled mode, 'channelId' must be passed, 'userId' is optional
     * In client auth enabled mode, 'clientAuthEnabled: true' must be passed
     * URI: 'oda-d618e748ebd4422094554c3f53c62cfa-da2.data.digitalassistant.oci.oraclecloud.com',
        channelId: 'bedcda1a-5961-4e47-9d9f-6317ab122095',
     */
    const chatWidgetSettings = {
        URI: 'oda-d618e748ebd4422094554c3f53c62cfa-da2.data.digitalassistant.oci.oraclecloud.com',                               // ODA URI, only the hostname part should be passed, without the https://
        clientAuthEnabled: isClientAuthEnabled,     // Enables client auth enabled mode of connection if set true, no need to pass if set false
        //channelID: 'bedcda1a-5961-4e47-9d9f-6317ab122095',
        channelId: 'bedcda1a-5961-4e47-9d9f-6317ab122095',                   // Channel ID, available in channel settings in ODA UI, optional if client auth enabled
        // userId: '<userID>',                      // User ID, optional field to personalize user experience

        //URI: 'oda-d618e748ebd4422094554c3f53c62cfa-da2.data.digitalassistant.oci.oraclecloud.com',
        //channelId: 'bedcda1a-5961-4e47-9d9f-6317ab122095',
        logoIcon: 'images/bot-button.png', 
        botIcon: 'images/bot-green.png',        
        personIcon: 'images/user-icon.png',
        position: { top: '50px', right: '100px' } ,


        enableAutocomplete: true,                   // Enables autocomplete suggestions on user input
        enableBotAudioResponse: true,               // Enables audio utterance of skill responses
        enableClearMessage: true,                   // Enables display of button to clear conversation
        enableSpeech: true,                         // Enables voice recognition
        showConnectionStatus: true,                 // Displays current connection status on the header
        i18n: {                                     // Provide translations for the strings used in the widget
            en: {                                   // en locale, can be configured for any locale
                chatTitle: 'Oracle Assistant'       // Set title at chat header
            }
        },
        timestampMode: 'relative',                  // Sets the timestamp mode, relative to current time or default (absolute)
        theme: WebSDK.THEME.REDWOOD_DARK,           // Redwood dark theme. The default is THEME.DEFAULT, while older theme is available as THEME.CLASSIC
        icons: {
            logo: null,
            avatarAgent: '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="black" d="M12 2c5.523 0 10 4.477 10 10a9.982 9.982 0 01-3.804 7.85L18 20a9.952 9.952 0 01-6 2C6.477 22 2 17.523 2 12S6.477 2 12 2zm2 16h-4a2 2 0 00-1.766 1.06c1.123.6 2.405.94 3.766.94s2.643-.34 3.765-.94a1.997 1.997 0 00-1.616-1.055zM12 4a8 8 0 00-5.404 13.9A3.996 3.996 0 019.8 16.004L10 16h4c1.438 0 2.7.76 3.404 1.899A8 8 0 0012 4zm0 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" fill="#100f0e" fill-rule="evenodd"/></svg>',
            avatarUser: '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path fill="black" d="M12 2c5.523 0 10 4.477 10 10a9.982 9.982 0 01-3.804 7.85L18 20a9.952 9.952 0 01-6 2C6.477 22 2 17.523 2 12S6.477 2 12 2zm2 16h-4a2 2 0 00-1.766 1.06c1.123.6 2.405.94 3.766.94s2.643-.34 3.765-.94a1.997 1.997 0 00-1.616-1.055zM12 4a8 8 0 00-5.404 13.9A3.996 3.996 0 019.8 16.004L10 16h4c1.438 0 2.7.76 3.404 1.899A8 8 0 0012 4zm0 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" fill="#100f0e" fill-rule="evenodd"/></svg>',
            avatarBot: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none"><path d="M0 0h36v36H0V0z" fill="#C74634"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 8.625a2.25 2.25 0 00-2.25 2.25v16c0 .621.504 1.125 1.125 1.125h.284c.298 0 .585-.119.796-.33l2.761-2.76a2.25 2.25 0 011.59-.66h15.944a2.25 2.25 0 002.25-2.25V10.875a2.25 2.25 0 00-2.25-2.25H7.875zM24.75 18a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-4.5-2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-9 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill="#fff"/></svg>'
        }
    };

    // Initialize SDK
    if (isClientAuthEnabled) {
        Bots = new WebSDK(chatWidgetSettings, generateToken);
    } else {
        Bots = new WebSDK(chatWidgetSettings);
    }

    // Connect to skill when the widget is expanded for the first time
    let isFirstConnection = true;

    Bots.on(WebSDK.EVENT.WIDGET_OPENED, function() {
        if (isFirstConnection) {
            Bots.connect();

            isFirstConnection = false;
        }
    });

    // Create global object to refer Bots
    window[name] = Bots;
}

/**
 * Function to generate JWT tokens. It returns a Promise to provide tokens.
 * The function is passed to SDK which uses it to fetch token whenever it needs
 * to establish connections to chat server
 *
 * @returns {Promise} Promise to provide a signed JWT token
 */
function generateToken() {
    return new Promise(function(resolve) {
        mockApiCall('https://mockurl').then(function(token) {
            resolve(token);
        });
    });
}

/**
 * A function mocking an endpoint call to backend to provide authentication token
 * The recommended behaviour is fetching the token from backend server
 *
 * @returns {Promise} Promise to provide a signed JWT token
 */
function mockApiCall() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            const now = Math.floor(Date.now() / 1000);
            const payload = {
                iat: now,
                exp: now + 3600,
                channelId: '<channelID>',
                userId: '<userID>'
            };
            const SECRET = '<channel-secret>';

            // An unimplemented function generating signed JWT token with given header, payload, and signature
            const token = generateJWTToken({ alg: 'HS256', typ: 'JWT' }, payload, SECRET);
            resolve(token);
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

/**
 * Unimplemented function to generate signed JWT token. Should be replaced with
 * actual method to generate the token on the server.
 *
 * @param {object} header
 * @param {object} payload
 * @param {string} signature
 */
function generateJWTToken(header, payload, signature) {
    throw new Error('Method not implemented.');
}
