import React, { useMemo } from 'react';
import { createForm } from '@formily/core';
import {
  FormProvider,
  createSchemaField,
} from '@formily/react';
import {
  FormItem,
  Input,
  NumberPicker,
  Select,
  Submit,
} from '@formily/antd-v5';

const fieldsConfig = [
    {
      "name": "firstName",
      "type": "string",
      "title": "First Name",
      "component": "Input",
      "required": true
    },
    {
      "name": "age",
      "type": "number",
      "title": "Age",
      "component": "NumberPicker",
      "required": false
    },
    {
      "name": "gender",
      "type": "string",
      "title": "Gender",
      "component": "Select",
      "options": [
        { "label": "Male", "value": "M" },
        { "label": "Female", "value": "F" }
      ]
    }
  ]
  


// 1) Create the Formily form instance
const form = createForm();

// 2) Register your components with createSchemaField
const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
    Select,
  },
});



const Formilyjs = () => {
    // 3) Build a full JSON‐Schema object from your JSON config
  const schema = useMemo(() => {
    const properties = fieldsConfig.reduce((buf, field) => {
      buf[field.name] = {
        type: field.type,
        title: field.title,
        'x-decorator': 'FormItem',
        'x-component': field.component,
        'x-component-props': {
          ...(field.options ? { options: field.options } : {}),
        },
        required: !!field.required,
      };
      return buf;
    }, {});
    return {
      type: 'object',
      properties,
    };
  }, []);
  return (
    <div style={{ width: '300px', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
        <FormProvider form={form}>
      {/* 4) Render with SchemaField */}
      <SchemaField schema={schema} />
      <Submit onSubmit={v => alert(JSON.stringify(v))}>
        Submit
      </Submit>
    </FormProvider>
    </div>
  );
};

export default Formilyjs;
