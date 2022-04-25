sap.ui.define(
    ["sap/ui/test/Opa5"],
    /**
     * @param {typeof sap.ui.test.Opa5} Opa5
     */
    function (Opa5) {
        "use strict";

        return Opa5.extend("my.name.fioritest.test.integration.arrangements.Startup", {
            iStartMyApp: function () {
                this.iStartMyUIComponent({
                    componentConfig: {
                        name: "my.name.fioritest",
                        async: true,
                        manifest: true,
                    },
                });
            },
        });
    }
);
