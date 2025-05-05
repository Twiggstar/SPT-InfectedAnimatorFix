
class Mod {
    preAkiLoad(container) {
        const modLoader = container.resolve("ModLoader");
        modLoader.registerBundle("User-InfectedAnimatorFix", {
            bundlePath: __dirname + "/client_script.js",
            deps: [],
        });
    }

    postDBLoad(container) {
        // No database logic needed
    }
}

module.exports = { mod: new Mod() };
