type Props = {
  label: string;
  children: React.ReactNode;
};

export default function InputBox({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={label} className="capitalize">
        {label}
      </label>
      {children}
    </div>
  );
}
