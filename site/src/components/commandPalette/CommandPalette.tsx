const CommandPalette = (props: any) => {
  return (
    <div className="shadow rounded-xl w-full mx-auto max-w-lg">
      <input
        className="w-full px-2 py-1.5 rounded-xl text-sm"
        type="text"
        name="command-palette"
        id="command-palette"
        placeholder="Command palette"
      />
    </div>
  );
};

export default CommandPalette;
