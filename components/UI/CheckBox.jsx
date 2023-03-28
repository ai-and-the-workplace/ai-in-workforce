export default function CheckBox({
  id,
  label,
  value,
  valueChangeHandler,
  checked,
  classes,
}) {
  return (
    <div className={`flex items-center ${classes}`}>
      <input
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={valueChangeHandler}
        className="h-4 w-4 rounded border border-darkBlue md:h-5 md:w-5"
      />
      <label htmlFor={id} className="ml-3 text-base text-darkBlue md:text-lg">
        {label}
      </label>
    </div>
  );
}
