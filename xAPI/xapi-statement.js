// xAPI Statment provides the customizable js functions that are called by the player.
// Please note that this file is specific to projects developed in Articualte Storyline and that use standardized variables.
// Whose determined these standardized variables? Are, they industry standard?
// I did. No. - The GrumpyID

function sendStatement(verb, verbId, object, objectId) {
    const player = GetPlayer();
    const secret_1js = player.GetVar("secret_1");
    const secret_2js = player.GetVar("secret_2");
    const fNamejs = player.GetVar("fName");
    const lNamejs = player.GetVar("lName");
    const uNamejs = lNamejs + ", " + fNamejs;
    const uEmailjs = player.GetVar("uEmail");
    const conf = {
        "endpoint": secret_1js,
        "auth": "Basic " + toBase64(secret_2js)
    };
    ADL.XAPIWrapper.changeConfig(conf);
    const statement = {
            "actor": {
                "name": uNamejs,
                "mbox": "mailto:" + uEmailjs
            },
            "verb": {
                "id": verbId,
                "display": { "en-US" : verb }
            },
            "object": {
                "id": objectId,
                "definition": {
                    "name": { "en-US": object }
                }
            } 
        };
        const result = ADL.XAPIWrapper.sendStatement(statement);
}
