import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useField } from 'formik';

type CustomTextFieldProps = TextFieldProps & {
  name: string;
  disableError?: boolean;
  label: string;
};

export default function CustomTextField({
  label,
  ...props
}: CustomTextFieldProps) {
  const [field, meta] = useField(props.name);
  return (
    <TextField
      label={label}
      {...field}
      {...props}
      error={Boolean(meta.touched && meta.error)}
      helperText={(meta.touched && meta.error) || props.helperText}
    />
  );
}
