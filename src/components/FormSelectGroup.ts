type Option = {
  valueText: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
  styles?: string;
};

type FormSelectGroupProps = {
  containerStyles?: string;
  labelText: string;
  labelStyles?: string;
  selectId: string;
  selectName: string;
  selectStyles?: string;
  options: Option[];
};

export default function FormSelectGroup(props: FormSelectGroupProps) {
  const container = document.createElement('div');
  container.style.cssText = props.containerStyles;

  const label = document.createElement('label');
  label.innerText = props.labelText;
  label.htmlFor = props.selectId;
  label.style.cssText = props.labelStyles;

  const select = document.createElement('select');
  select.id = props.selectId;
  select.name = props.selectName;
  select.style.cssText = props.selectStyles;

  props.options
    .map(o => {
      const option = document.createElement('option');
      option.style.cssText = o.styles;
      option.value = o.value;
      option.text = o.valueText;
      option.disabled = o.disabled ? true : false;
      option.selected = o.selected ? true : false;
      return option;
    })
    .forEach(o => select.appendChild(o));

  container.appendChild(label);
  container.appendChild(select);

  return container;
}
