// A custom input component wrapping the HTML input element, programmed to retain required styling
// only used in the contact page so far

function FormInput({ label, placeholder, value, setValue, index }) {
  const updateValue = (v) => {
    setValue({ ...value, [index]: v });
  };

  return (
    <div className="flex flex-col">
      <div className="text-xl lg:text-2xl/16 font-bold leading-tight text-gray-900">{label}</div>
      <input className="text-lg py-2 lg:border-b-2 border-b-1 focus:outline-0" type="text" placeholder={placeholder} value={value[index]} onChange={(e) => updateValue(e.target.value)} />
    </div>
  );
}

export default FormInput;
