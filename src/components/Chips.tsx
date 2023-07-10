function Chip({ label }: any) {
  return (
    <p className="text-white rounded-lg py-2 px-4 text-center category bg-gradient-to-r from-green-400 to-blue-500">
      {label}
    </p>
  );
}

export default Chip;
