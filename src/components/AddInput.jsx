export function AddInput({ titleValue , onChange, onSubmit, todos }) {
  return (
    <form className="container-add" onSubmit={(e) => e.preventDefault()}>
      <input
        className="input-add"
        type="text"
        value={titleValue}
        onChange={onChange}
        maxLength='19'
        placeholder={todos.length >= 11 ? 'No more space to intoduce a task': undefined} 
      />
      <button onClick={onSubmit} className="btn-add">
        Add
      </button>
    </form>
  );
}
