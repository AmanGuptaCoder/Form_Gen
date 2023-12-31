import {
  TextInput,
  Select,
  Checkbox,
  Radio,
  Textarea,
  Switch,
  Slider,
  Rating,
  SegmentedControl,
  PinInput,
  PasswordInput,
  NumberInput,
  NativeSelect,
  MultiSelect,
  FileInput,
  ColorInput,
  ColorPicker,
  Chip,
  Autocomplete,
} from '@mantine/core';
import { FieldType } from './types';

export const COMPONENTS_MAP = {
  [FieldType.TextInput]: TextInput,
  [FieldType.AutoComplete]: Autocomplete,
  [FieldType.Select]: Select,
  [FieldType.Checkbox]: Checkbox,
  [FieldType.Radio]: Radio,
  [FieldType.Textarea]: Textarea,
  [FieldType.Switch]: Switch,
  [FieldType.Slider]: Slider,
  [FieldType.Rating]: Rating,
  [FieldType.SegmentedControl]: SegmentedControl,
  [FieldType.PinInput]: PinInput,
  [FieldType.PasswordInput]: PasswordInput,
  [FieldType.NumberInput]: NumberInput,
  [FieldType.NativeSelect]: NativeSelect,
  [FieldType.MultiSelect]: MultiSelect,
  [FieldType.FileInput]: FileInput,
  [FieldType.ColorInput]: ColorInput,
  [FieldType.ColorPicker]: ColorPicker,
  [FieldType.Chip]: Chip,
};

export const DEFAULT_ERROR_MESSAGE = 'Field is required.';
