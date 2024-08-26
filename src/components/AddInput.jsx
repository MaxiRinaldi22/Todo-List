export function AddInput({ value, onChange, onSubmit }) {
  return (
    <form className="container-add" onSubmit={(e) => e.preventDefault()}>
      <input
        className="input-add"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSubmit} className="btn-add">
        Add
      </button>
    </form>
  );
}
