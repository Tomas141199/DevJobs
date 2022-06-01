import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const SelectCode = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="floating-input mb-4 relative h-10">
      <select
        className="border-b-4 border-primary-red w-full  p-1 px-2 outline-none rounded-sm"
        placeholder="placeholder"
        {...field}
        {...props}
      >
        <option value="" disabled>
          Selecione una opcion
        </option>

        {props.values.map((value) => {
          return (
            <option key={Math.random()} value={value.dialCode.replace("+", "")}>
              <img src={value.flag} alt={value.name} className="w-4 h-4" />
              {`${value.name} (${value.dialCode})`}
            </option>
          );
        })}
      </select>

      {/* Errores de validacion */}
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
};

export default SelectCode;
