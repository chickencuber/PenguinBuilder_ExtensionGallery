class testExtension implements PenguinExtension {
    Info(): Category {
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
        }
    }
    public generator = {
        testBlock(block: Block): string {
            return block.getField("Num");;
        }
    };
}

Penguin.LoadExtension(testExtension);
