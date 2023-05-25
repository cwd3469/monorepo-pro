import type { Meta, StoryObj } from '@storybook/react';
import { WButton } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/WButton',
  component: WButton,
  tags: ['autodocs'],
  
} satisfies Meta<typeof WButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};