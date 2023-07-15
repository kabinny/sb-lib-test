import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
}

export const Default = {
  args: {
    label: 'Button!',
  },
}
