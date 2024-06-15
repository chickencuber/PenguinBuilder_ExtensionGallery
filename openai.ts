// OpenAI Extension for PenguinBuilder

class OpenAIExtension implements PenguinExtension {
  Info(): Category {
    return {
      name: "OpenAI",
      color: "#FF5733",
      ID: "openai",
      blocks: [
        {
          opcode: "generateText",
          color: 230,
          blockType: Penguin.blockType.Value("String"),
          args: [
            Penguin.Argument.Value("PROMPT", "String", [
              Penguin.Field.TextInput("PROMPT", "Enter your prompt")
            ]),
            Penguin.Argument.Value("MAX_TOKENS", "Number", [
              Penguin.Field.NumberInput("MAX_TOKENS", 50)
            ])
          ]
        },
        {
          opcode: "createImage",
          color: 160,
          blockType: Penguin.blockType.Value("Image"),
          args: [
            Penguin.Argument.Value("DESCRIPTION", "String", [
              Penguin.Field.TextInput("DESCRIPTION", "Describe the image")
            ]),
            Penguin.Argument.Value("SIZE", "String", [
              Penguin.Field.MenuInput("SIZE", ["256x256", "512x512", "1024x1024"])
            ])
          ]
        }
      ]
    };
  }

  generator = {
    generateText: (block: Block) => {
      const prompt = block.getField("PROMPT");
      const maxTokens = block.getField("MAX_TOKENS");
      return `openai.generateText("${prompt}", { maxTokens: ${maxTokens} });`;
    },
    createImage: (block: Block) => {
      const description = block.getField("DESCRIPTION");
      const size = block.getField("SIZE");
      return `openai.createImage("${description}", { size: "${size}" });`;
    }
  };
}

// Load the extension into PenguinBuilder
Penguin.LoadExtension(OpenAIExtension);
