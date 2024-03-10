class Test implements PenguinExtension {
    Info(): Category {
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
        }
    }
    generator = {
        test() {
            return "//test";
        }
    }
}

Penguin.LoadExtension(Test);
