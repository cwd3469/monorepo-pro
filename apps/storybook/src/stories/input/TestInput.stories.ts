import type { Meta, StoryObj } from '@storybook/react';
import { TestInput } from 'ui/src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Test/Input',
  component: TestInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TestInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: 'small',
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {},
};

export const Small: Story = {
  args: {},
};
