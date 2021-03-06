// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './src/**/*.e2e-spec.ts'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'] // for automated, headless tests
            // args: [] // for manual tests
        }
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    },
    params: {
        xmppJid: process.env.XMPP_JID,
        xmppPassword: process.env.XMPP_PASSWORD,
        xmppDomain: process.env.XMPP_DOMAIN,
        xmppUri: process.env.XMPP_URI,
    }
};
