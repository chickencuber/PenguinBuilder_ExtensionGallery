"use strict";
class testExtension {
    constructor() {
        this.generator = {
            testBlock(block) {
                return block.getField("Num");
                ;
            }
        };
    }
    Info() {
        return {
            name: "test extension",
            color: "#aaa",
            ID: "test-extension",
            blocks: [
                {
                    opcode: "testBlock",
                    color: 0,
                    blockType: Penguin.blockType.Value("Number"),
                    args: [
                        Penguin.Argument.Dummy([
                            Penguin.Field.Text("test"),
                            Penguin.Field.NumberInput("Num", 0),
                        ]),
                    ]
                }
            ],
        };
    }
}
Penguin.LoadExtension(testExtension);
