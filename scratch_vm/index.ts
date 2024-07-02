(() => {
  class Extension implements PenguinExtension {
    Info() {
      return {
        name: "Scratch Vm",
        color: "#0000FF",
        ID: "Scratch_VM",
        blocks: [],
      };
    }
    generator = {};
  }

  Penguin.LoadExtension(Extension);
})();
