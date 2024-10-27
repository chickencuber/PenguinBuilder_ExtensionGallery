"use strict";
(() => {
    class Extension {
        constructor() {
            this.generator = {
                get_all_sprite() {
                    return "Scratch.vm.runtime._stageTarget.sprites";
                },
                is_stage(block) {
                    return `(${block.getValue("sprite")} !== undefined ? ${block.getValue("sprite")}.isStage : false)`;
                },
                get_sprite(block) {
                    if (block.getField("type") === "Stage")
                        return "Scratch.vm.runtime._stageTarget";
                    if (block.top.ID !== "create_block") {
                        alert("Error: 'get current sprite' requires the 'create block' block");
                        throw new Error("'get current sprite' requires the 'create block' block");
                    }
                    return "util.target";
                },
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
                                    Direction: "direction"
                                }),
                                Penguin.Field.Text("of"),
                            ]),
                        ],
                    },
                    {
                        opcode: "get_sprite",
                        color: 225,
                        blockType: Penguin.blockType.Value("Sprite"),
                        args: [
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("get"),
                                Penguin.Field.MenuInput("type", [
                                    "Stage",
                                    "Current Sprite",
                                ]),
                            ]),
                        ],
                    },
                    {
                        opcode: "get_all_sprites",
                        color: 225,
                        blockType: Penguin.blockType.Value("Array"),
                        args: [
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("get all sprites"),
                            ]),
                        ],
                    },
                    {
                        opcode: "is_stage",
                        color: 225,
                        blockType: Penguin.blockType.Value("Boolean"),
                        args: [
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("is"),
                            ]),
                            Penguin.Argument.Value("sprite", "Sprite", []),
                            Penguin.Argument.Dummy([
                                Penguin.Field.Text("stage"),
                            ]),
                        ]
                    }
                ],
            };
        }
    }
    Penguin.LoadExtension(Extension);
})();
