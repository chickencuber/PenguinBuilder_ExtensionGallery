"use strict";
(() => {
    class Extension {
        Info() {
            return {
                name: "Example",
                color: "#0000FF",
                ID: "Example",
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
        generator = {
            test(block) {
                return `//${block.getField("test")}`;
            }
        };
    }
    Penguin.LoadExtension(Extension);
})();
