import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { useField } from 'formik'
import InputMask from 'react-input-mask'

type FormTextFieldType = TextFieldProps & {
  name: string
  disableError?: boolean
  label: string
  mask?: string
  placeholder?: string
}

export default function FormTextField({ label, ...props }: FormTextFieldType) {
  const [field, meta] = useField(props.name)
  return (
    <InputMask {...field} maskChar={null} mask={props.mask}>
      {() => (
        <TextField
          {...field}
          {...props}
          label={label}
          error={Boolean(meta.touched && meta.error)}
          helperText={(meta.touched && meta.error) || props.helperText}
        />
      )}
    </InputMask>
  )
}
