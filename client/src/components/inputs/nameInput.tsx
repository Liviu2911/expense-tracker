import InputBox from "../inputbox";

export default function NameInput() {
  return (
    <InputBox label="name">
      <input
        name="name"
        className="border border-gray-700 rounded p-2 focus:ring-0 focus:outline-gray-700 focus:outline focus:outline-offset-2 text-sm"
      />
    </InputBox>
  );
}
