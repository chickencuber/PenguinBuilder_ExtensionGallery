"use strict";
(() => {
    class Extension {
        constructor() {
            this.generator = {
                test(block) {
                    return `//${block.getField("test")}`;
                }
            };
        }
        Info() {
            return {
                name: "Scratch Vm",
                color: "#0000FF",
                ID: "Scratch_VM",
                blocks: [
                    {
                        opcode: "test",
                        color: 225,
                        blockType: Penguin.blockType.Statement(),
                        args: [
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("test"),
                                Penguin.Field.TextInput("test", "test")
                            ])
                        ]
                    }
                ],
            };
        }
    }
    Penguin.LoadExtension(Extension);
})();
