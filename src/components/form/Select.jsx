import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const Select = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="floating-input mb-8 relative h-10">
      <label className="text-xs">{props.label}</label>
      <select
        className="border-b-4 border-primary-jade w-full  p-1 px-2 outline-none rounded-sm"
        placeholder="placeholder"
        {...field}
        {...props}
      >
        <option value="" disabled>
          Selecione una opcion
        </option>

        {props.values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>

      {/* Errores de validacion */}
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
};

export default Select;
