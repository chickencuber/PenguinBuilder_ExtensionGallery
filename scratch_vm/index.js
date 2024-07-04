"use strict";
(() => {
    class Extension {
        constructor() {
            this.generator = {
                get_sprite_name(block) {
                    if ((block.top.ID = "create_block")) {
                        var code = `util.getSpriteTargetByName("${block.getValue("Name")}")`;
                    }
                    else {
                        var code = `Scratch.vm.runtime.getSpriteTargetByName("${block.getValue("Name")}")`;
                    }
                    return code;
                },
                get_value(block) {
                    const sprite = block.getValue("Sprite");
                    const part = block.getField("Part");
                    return `(${sprite} !== undefined? ${sprite}.${part}: 0)`;
                },
            };
        }
        Info() {
            return {
                name: "Scratch Vm",
                color: "#0000FF",
                ID: "Scratch_VM",
                blocks: [
                    {
                        opcode: "get_sprite_name",
                        color: 225,
                        blockType: Penguin.blockType.Value("Sprite"),
                        args: [
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("Get Sprite By Name"),
                            ]),
                            Penguin.Argument.Value("Name", "String", []),
                        ],
                    },
                    {
                        opcode: "get_value",
                        color: 225,
                        blockType: Penguin.blockType.Value("Number"),
                        args: [
                            Penguin.Argument.Dummy([Penguin.Field.Text("Get"),
                                Penguin.Field.MenuInput("Part", {
                                    X: "x",
                                    Y: "y",
                                }),
                                Penguin.Field.Text("of")
                            ]),
                            Penguin.Argument.Value("Sprite", "Sprite", []),
                        ],
                    },
                ],
            };
        }
    }
    Penguin.LoadExtension(Extension);
})();
