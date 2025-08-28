function TextInput({ type="text", label, placeholder="Enter your Input here", onChangeHandler }){
    return (
        <label>
            <span className="text-green-700">{label}</span>
            <input 
                type={type}
                placeholder={placeholder}
                onChange={onChangeHandler}
                className="px-4 py-2 border border-green-700 rounded-md w-full"
            />
        </label>
    );
}

export default TextInput;