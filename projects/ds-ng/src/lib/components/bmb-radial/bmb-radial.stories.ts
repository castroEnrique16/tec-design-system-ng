import { Meta, StoryObj } from '@storybook/angular';
import { BmbRadialComponent } from './bmb-radial.component';

export default {
  title: 'Micro Componentes/Radial',
  component: BmbRadialComponent,
  parameters: {
    docs: {
      description: {
        component: `
Below is an example of how you can use this component in TypeScript:

\`\`\`typescript
import { BmbRadialComponent } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
@Component({
  selector: 'component',
  standalone: true,
  imports: [ BmbRadialComponent ],
  templateUrl: './component.html',
  styleUrl: './component.scss',
})
export class Component {
  handleRadial(element: HTMLInputElement): void {
    console.log('Radio value:', element.value);
    console.log('Radio name:', element.name);
    console.log('Is it checked?', element.checked);
  }
}
\`\`\`

Below is an example of how you can use this component in HTML:
        `,
      },
    },
  },
  argTypes: {
    id: {
      name: 'Id',
      control: { type: 'text' },
      description:
        'The unique identifier for the checkbox component. It is used to link the label with the checkbox input element through the "for" attribute, enhancing accessibility and usability.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    checked: {
      name: 'Checked',
      control: { type: 'boolean' },
      description:
        'Determines whether the checkbox is checked or not. Setting this property to true checks the checkbox, and false unchecks it.',
      table: {
        category: 'Properties',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
      description:
        'If set to true, disables the checkbox input, making it non-interactive and unclickable. This is useful for conditions where user interaction should be restricted.',
      table: {
        category: 'Properties',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    required: {
      name: 'Required',
      control: { type: 'boolean' },
      description:
        'Specifies whether the radio button must be filled out before submitting the form. If set to true, a radio button within the group must be selected to validate the form. This is commonly used to ensure that users do not skip mandatory choices in forms, enhancing data integrity and user interaction compliance.',
      table: {
        category: 'Properties',
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    value: {
      name: 'Value',
      control: { type: 'text' },
      description:
        'The value that will be submitted with the form if the checkbox is checked. This is the value that will be sent to the server or handled on form submission.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    name: {
      name: 'Name',
      control: { type: 'text' },
      description:
        'The name of the checkbox, which is used to identify the form data after it’s submitted. Multiple checkboxes can share the same name to create a group where multiple items can be selected.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    label: {
      name: 'Label',
      control: { type: 'text' },
      description:
        'The text label associated with the checkbox. It is displayed next to the checkbox and helps users understand the context of what the checkbox represents.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    ariaDescribedby: {
      name: 'Aria Described by',
      control: { type: 'text' },
      description:
        'Provides additional descriptive text for the checkbox, enhancing accessibility by linking the checkbox to a descriptive element by ID.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    ariaLabel: {
      name: 'Aria Label',
      control: { type: 'text' },
      description:
        'Defines a string that labels the checkbox for accessibility purposes, which can be used when a visible label text is not present.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    ariaLabelledby: {
      name: 'Aria Labelled by',
      control: { type: 'text' },
      description:
        'Identifies the element(s) that labels the checkbox for accessibility purposes, providing a reference to the IDs of the elements that serve as the checkbox label.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    labelPosition: {
      name: 'Label Position',
      control: { type: 'text' },
      description:
        'Specifies the position of the label relative to the checkbox. Can be set to "before" or "after", indicating whether the label appears to the left or right of the checkbox.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
      },
    },
    change: {
      name: 'Change',
      control: {
        type: '',
      },
      description:
        'An event that is emitted when the state of the checkbox changes, such as when it is checked or unchecked. This can be used to trigger functions or actions based on the checkbox’s state change.',
      table: {
        category: 'Events',
        type: { summary: '(change)="handleRadial($event)"' },
      },
    },
  },
  args: {
    id: 'checkbox1',
    checked: false,
    disabled: false,
    required: false,
    value: '',
    name: '',
    label: 'Contrato profesor cátedra Biología marina CCM.pdf',
    ariaDescribedby: '',
    ariaLabel: '',
    ariaLabelledby: '',
    labelPosition: 'before',
    change: () => {
      window.alert('Radial clicked');
    },
  },
} as Meta<typeof BmbRadialComponent>;

type Story = StoryObj<BmbRadialComponent>;

export const Default: Story = {};
