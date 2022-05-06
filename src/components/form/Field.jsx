import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const Field = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-12 h-10">
      <input
        type={props.type}
        className="border-b-4 border-primary-red w-full p-1 px-2 outline-none rounded-sm"
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

export default Field;
