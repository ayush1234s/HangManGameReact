import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { Link } from "react-router-dom";

function TextInputForm({ inputType, handleTextInputChange, handleShowHideClick, handleFormSubmit, handleHintInputChange }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Start a New Game</h1>
        <form  className="space-y-6">
          <div>
            <TextInput 
              type={inputType}
              label="Enter a word or a phrase"
              placeholder="Enter a word or phrase here"
              onChangeHandler={handleTextInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <TextInput 
              type="text"
              label="Enter a hint"
              placeholder="Enter a hint here"
              onChangeHandler={handleHintInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <Button 
              text={inputType === "password" ? "Show" : "Hide"}
              styleType="warning"
              onClickHandler={handleShowHideClick}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
            />

            <Button
              text="Submit"
              styleType="primary"
              type="submit"
              onClickHandler={handleFormSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            />
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-500 hover:text-blue-700 transition duration-300">
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TextInputForm;