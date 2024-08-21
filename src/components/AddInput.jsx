export function AddInput({value, onChange, onSubmit}) {
  return (
    <section className="container-add">
      <input
        className="input-add"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSubmit} className="btn-add">
        Add
      </button>
    </section>
  );
}
