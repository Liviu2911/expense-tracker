import InputBox from "../inputbox";

export default function DescriptionInput() {
  return (
    <InputBox label="description">
      <textarea
        name="description"
        className="border border-gray-700 rounded-lg p-4 h-28 focus:ring-0 focus:outline-gray-700 focus:outline focus:outline-offset-2"
      />
    </InputBox>
  );
}
