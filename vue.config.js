const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        electronBuilder: {
            // List native deps here if they don't work
            externals: [''],
            // If you are using Yarn Workspaces, you may have multiple node_modules folders
            // List them all here so that VCP Electron Builder can find them
            nodeModulesPath: ['../../node_modules', './node_modules'],
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                appId: 'kr.re.keti.app',
                productName: "time_ticker",
                win: {
                    icon: "./public/JWS_TimeTicker.png",
                    target: [
                        {
                            target: "nsis",
                            arch: ["x64", "ia32"]
                        }
                    ]
                },
                linux: {
                    icon: "./public/JWS_TimeTicker.png",
                    target: [
                        {
                            target: "nsis",
                            arch: ["armv7l"]
                        }
                    ]
                },
                nsis: {
                    oneClick: false,
                    perMachine: true,
                    allowToChangeInstallationDirectory: true
                },
                // publish: ["github"]
                publish: [
                    {
                        provider: "github",
                        owner: "dnjstjr93",
                        channel: "latest",
                        protocol: 'https',
                        releaseType: 'release',
                        token: process.env.GH_TOKEN
                    }
                ]
            }
        }
    }
})