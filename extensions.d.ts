declare interface PenguinExtension {
    Info(): Category;
    generator: {
      [generator: string]: (block: Block) => string;
    };
  }

  declare type blockType = {
    kind: "Statement";
  } | {
    kind: "Value";
    type: string | string[];
  } | {
    kind: "Hat";
  };

  declare interface BlockType {
    opcode: string;
    color: number;
    blockType: blockType;
    args: ArgumentType[];
  }

  declare type ArgumentType =
    & {
      fields: fieldType[];
    }
    & ({
      kind: "Value";
      type: string | string[];
      ID: string;
    } | {
      kind: "Statement";
      ID: string;
    } | {
      kind: "Dummy";
    });

  declare interface Block {
    ID: string;
    parent: Block | null;
    top: Block;
    BlocklyBlock: any;
    BlocklyGenerator: any;
    getField: (ID: string) => string;
    getValue: (ID: string) => string;
    getStatement: (ID: string) => string;
  }

  declare interface Category {
    name: string;
    color: string;
    ID: string;
    blocks: BlockType[];
  }

  declare type fieldType = {
    kind: "text";
    value: string;
  } | {
    kind: "text_input";
    ID: string;
    default: string;
  } | {
    kind: "number_input";
    ID: string;
    default: number;
  } | {
    kind: "angle_input";
    ID: string;
    default: number;
  } | {
    kind: "menu_input";
    ID: string;
    value: string[] | Record<string, any>;
  } | {
    kind: "checkbox_input";
    ID: string;
    default: boolean;
  } | {
    kind: "color_input";
    ID: string;
    default: string;
  };

  declare const Penguin: {
    _getType(type: string | string[]): string | string[];
    _setFields(input: any, fields?: fieldType[]): void;
    _getMenuItems(value: string[] | Record<string, any>): any[][];
    LoadExtension(Extension: new () => PenguinExtension);
    Block: new(BlocklyBlock: any, BlocklyGenerator: any) => blockType;
    blockType: {
      Statement(): blockType;
      Value(type: string | string[]): blockType;
      Hat(): blockType;
    },
    Argument: {
      Value(
        ID: string,
        type: string | string[],
        fields: fieldType[],
      ): ArgumentType;
      Statement(ID: string, fields: fieldType[]): ArgumentType;
      Dummy(fields: fieldType[]): ArgumentType;
    },
    Field: {
      Text(value: string): fieldType;
      TextInput(ID: string, _default: string): fieldType;
      NumberInput(ID: string, _default: number): fieldType;
      AngleInput(ID: string, _default: number): fieldType;
      MenuInput(ID: string, items: string[] | Record<string, any>): fieldType;
      CheckboxInput(ID: string, _default: boolean): fieldType;
      ColorInput(ID: string, _default: string): fieldType;
    },
  };
