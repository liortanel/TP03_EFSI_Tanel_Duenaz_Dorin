function FormInput({ label, type = "text", placeholder }) {
  return (
    <>
      <label>{label}</label>

      {type === "textarea" ? (
        <textarea placeholder={placeholder}></textarea>
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </>
  );
}

export default FormInput;