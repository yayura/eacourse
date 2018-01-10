"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../features/*.feature"],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "http://localhost:8808/",
    suites: {
        "homepage": "../features/Home.feature",
        "coursedetails": "../features/CourseDetails.feature"
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../steps/*.js', '../hooks/*.js'],
        // tags: '@smoke or @regression'
        tags: '@test'
    }
};
//# sourceMappingURL=config.js.map