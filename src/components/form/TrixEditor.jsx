import { Field, ErrorMessage } from "formik";
import { TrixEditor } from "react-trix";
import "trix/dist/trix";
import "trix/dist/trix.css";

const TextField = () => {
  return (
    <div className="mb-4 sm:mb-2">
      <label className="text-light-blue text-xs">Descripcion</label>
      <Field name="descripcion">
        {({ field, errors, touched }) => (
          <div className="relative">
            <TrixEditor
              value={field.value}
              placeholder="Describe el puesto"
              className="bg-white border-b-4 border-b-primary-jade"
              onChange={field.onChange(field.name)}
            />

            <ErrorMessage
              name="descripcion"
              component="div"
              className="text-red-500 border-l-2 border-l-red-600 bg-red-100 text-xs mt-tiny px-2 rounded-sm"
            />
          </div>
        )}
      </Field>
    </div>
  );
};

export default TextField;
