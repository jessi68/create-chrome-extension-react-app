const manifestJson = (projectName) => `{
    "name": "${projectName}",
    "description": "",
    "manifest_version": 2,
    "version": "1.0.0",
    "icons": {
     
    },
    "browser_action": {
      "default_icon": {
        "http://*/*", "https://*/*", "<all_urls>"
      }
      "show_matches": [
       
      ]
    },
    "background": {
      "scripts": [
        "background.js"
      ],
      "persistent": false
    },
    "content_scripts": [
      {
        "matches": ["http://*/*", "https://*/*", "<all_urls>"],
        "js": [
          "content.js"
        ]
      }
    ]
  }

`;

module.exports = manifestJson;