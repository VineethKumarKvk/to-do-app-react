function TextInput({value,onChange}) {
    return (
        <input className="text-input" type="text" value={value} onChange={onChange}placeholder="Enter the task Name"/>
    )
}

export default TextInput;