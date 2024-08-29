export function RemoveBtns({
  selectedOption,
  handleRemoveDoneTasks,
  handleRemoveAllTasks,
}) {
  return (
    <section className="container-delete">
      {selectedOption === "all" && (
        <>
          <button onClick={handleRemoveDoneTasks}>Delete done tasks</button>
          <button onClick={handleRemoveAllTasks}>Delete all tasks</button>
        </>
      )}
    </section>
  );
}
