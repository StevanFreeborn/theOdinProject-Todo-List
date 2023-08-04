type ValidInputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

type FormInputGroupProps = {
  containerStyles?: string;
  labelText: string;
  labelStyles?: string;
  inputId: string;
  inputName: string;
  inputType: ValidInputTypes;
  inputStyles?: string;
};

export default function FormInputGroup(props: FormInputGroupProps) {
  const container = document.createElement('div');
  container.style.cssText = props.containerStyles;

  const label = document.createElement('label');
  label.htmlFor = props.inputId;
  label.innerText = props.labelText;
  label.style.cssText = props.labelStyles;

  const input = document.createElement('input');
  input.id = props.inputId;
  input.name = props.inputName;
  input.type = props.inputType;
  input.style.cssText = props.inputStyles;

  container.appendChild(label);
  container.appendChild(input);

  return container;
}
