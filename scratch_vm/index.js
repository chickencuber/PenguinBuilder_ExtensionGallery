"use strict";
(() => {
    class Extension {
        constructor() {
            this.generator = {
                get_sprite_name(block) {
                    const code = `Scratch.vm.runtime.getSpriteTargetByName(${block.getValue("Name")})`;
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
                            Penguin.Argument.Value("Name", "String", [
                                Penguin.Field.Text("Get Sprite By Name"),
                            ]),
                        ],
                    },
                    {
                        opcode: "get_value",
                        color: 225,
                        blockType: Penguin.blockType.Value("Number"),
                        args: [
                            Penguin.Argument.Value("Sprite", "Sprite", [
                                Penguin.Field.Text("Get"),
                                Penguin.Field.MenuInput("Part", {
                                    X: "x",
                                    Y: "y",
                                }),
                                Penguin.Field.Text("of"),
                            ]),
                        ],
                    },
                ],
            };
        }
    }
    Penguin.LoadExtension(Extension);
})();
