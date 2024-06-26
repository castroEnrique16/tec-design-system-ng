import { Meta, StoryObj } from '@storybook/angular';
import { BmbStepProgressBarComponent } from './bmb-step-progress-bar.component';

export default {
  title: 'Micro Componentes/Step Progress Bar',
  component: BmbStepProgressBarComponent,
  decorators: [],
  parameters: {
    docs: {
      description: {
        component: `
Below is an example of how you can use this component in TypeScript:

\`\`\`typescript
import { BmbStepProgressBarComponent } from '@ti-tecnologico-de-monterrey-oficial/ds-ng';
@Component({
  selector: 'component',
  standalone: true,
  imports: [ BmbStepProgressBarComponent ],
  templateUrl: './component.html',
  styleUrl: './component.scss',
})
\`\`\`

Below is an example of how you can use this component in HTML:
        `,
      },
    },
  },
  argTypes: {
    activeStep: {
      name: 'Active Step',
      control: {
        type: 'number',
      },
      description: 'Refers to the step that is active.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
      },
    },
    totalSteps: {
      name: 'Total Steps',
      control: {
        type: 'number',
      },
      description: 'Number of steps that the counter will show.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['small', 'normal'],
      description: 'Set the size of the steps.',
      table: {
        category: 'Properties',
        type: { summary: 'select' },
        defaultValue: { summary: 'normal' },
      },
    },
  },
  args: {
    totalSteps: 5,
    activeStep: 3,
    size: 'small',
  },
} as Meta<typeof BmbStepProgressBarComponent>;

type Story = StoryObj<BmbStepProgressBarComponent>;

export const Default: Story = {};