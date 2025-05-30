function FormInput({ label, placeholder, value, setValue, index }) {
    const updateValue = (v)=>{
        console.log(index)
        setValue({...value, [index]: v})
    }

  return (
    <div className="flex flex-col lg:gap-2">
      <div className="text-2xl font-[600]">{label}</div>
      <input className="text-lg lg:py-3 py-2 lg:border-b-2 border-b-1 focus:outline-0" type="text" placeholder={placeholder} value={value[index]} onChange={(e) => updateValue(e.target.value)} />
    </div>
  );
}

export default FormInput;
