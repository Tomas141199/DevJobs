import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const FieldWithLabel = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-8 h-10">
      <label className="text-xs">{props.label}</label>
      <input
        type={props.type}
        className="border-b-4 border-primary-jade w-full p-1 px-2 outline-none rounded-sm"
        placeholder={props.placeholder}
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
};

export default FieldWithLabel;
