import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { useField } from 'formik'
import InputMask from 'react-input-mask'

type FormTextFieldType = TextFieldProps & {
  mask?: string
}

export default function FormTextField({ ...props }: FormTextFieldType) {
  const [field, meta] = useField(props.name)
  return (
    <InputMask {...field} maskChar={null} mask={props.mask}>
      {() => (
        <TextField
          {...field}
          {...props}
          inputProps={{
            'data-testid': `text-field-${props['data-testid']}`
          }}
          error={Boolean(meta.touched && meta.error)}
          helperText={(meta.touched && meta.error) || props.helperText}
        />
      )}
    </InputMask>
  )
}
