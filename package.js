Package.describe({
  name: "lpender:cordova-social-sharing",
  documentation: "README.md",
  git: "git@github.com:lpender/meteor-cordova-social-sharing.git",
  summary: "Port of http://plugins.cordova.io/#/package/nl.x-services.plugins.socialsharing",
  version: "4.3.19",
});

Cordova.depends({
  "nl.x-services.plugins.socialsharing": "4.3.19"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2");
});
