type FormTextAreaGroupProps = {
  containerStyles?: string;
  labelText: string;
  labelStyles?: string;
  textAreaId: string;
  textAreaName: string;
  textAreaValue?: string;
  textAreaStyles?: string;
};

export default function FormTextAreaGroup(props: FormTextAreaGroupProps) {
  const container = document.createElement('div');
  container.style.cssText = props.containerStyles;

  const label = document.createElement('label');
  label.innerText = props.labelText;
  label.style.cssText = props.labelStyles;

  const textarea = document.createElement('textarea');
  textarea.id = props.textAreaId;
  textarea.name = props.textAreaId;
  textarea.value = props.textAreaValue;
  textarea.style.cssText = props.textAreaStyles;

  container.appendChild(label);
  container.appendChild(textarea);

  return container;
}
