"use strict";
(() => {
    class Extension {
        Info() {
            return {
                name: "Random Utils",
                color: "#888888",
                ID: "random_utils",
                blocks: [
                    {
                        opcode: "fetch",
                        color: 210,
                        blockType: Penguin.blockType.Value(["Object", "String"]),
                        args: [
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("fetch"),
                                Penguin.Field.TextInput("url", "url"),
                                Penguin.Field.MenuInput("type", {
                                    JSON: "json",
                                    Text: "text",
                                })
                            ])
                        ]
                    },
                    {
                        opcode: "encode",
                        color: 210,
                        blockType: Penguin.blockType.Value("String"),
                        args: [
                            Penguin.Argument.Value("str", "String", [
                                Penguin.Field.MenuInput("type", {
                                    "Decode Base64": "atob",
                                    "Encode Base64": "btoa",
                                    "Encode URL": "encodeURI",
                                    "Decode URL": "decodeURI",
                                })
                            ])
                        ]
                    }
                ],
            };
        }
        generator = {
            fetch(block) {
                const url = block.getField("url").replaceAll('"', '\\"');
                const type = block.getField("type");
                return `(await (await fetch("${url}")).${type}())`;
            },
            encode(block) {
                const str = block.getValue("str");
                const type = block.getField("type");
                return `(${type}(${str}))`;
            }
        };
    }
    Penguin.LoadExtension(Extension);
})();
