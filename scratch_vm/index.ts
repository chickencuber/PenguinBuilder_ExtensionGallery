(() => {
  class Extension implements PenguinExtension {
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
    generator = {};
  }

  Penguin.LoadExtension(Extension);
})();
