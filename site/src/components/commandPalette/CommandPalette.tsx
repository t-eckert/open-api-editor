const CommandPalette = (props: any) => {
  return (
    <div className="shadow rounded-xl">
      <input
        className="px-2 py-1 rounded-xl text-xl"
        type="text"
        name="command-palette"
        id="command-palette"
        placeholder="Command palette"
      />
    </div>
  );
};

export default CommandPalette;
