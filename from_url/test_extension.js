"use strict";
class Test {
    constructor() {
        this.generator = {
            test() {
                return "//test";
            }
        };
    }
    Info() {
        return {
            color: "#aaa",
            ID: "test_extension",
            name: "test",
            blocks: [
                {
                    opcode: "test",
                    color: 0,
                    blockType: Penguin.blockType.Statement(),
                    args: [
                        Penguin.Argument.Dummy([
                            Penguin.Field.Text("test")
                        ])
                    ]
                }
            ]
        };
    }
}
Penguin.LoadExtension(Test);
