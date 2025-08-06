import React, { useState, useEffect, useMemo } from 'react';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import {
  FormItem,
  Input,
  NumberPicker,
  Select,
  Submit,
} from '@formily/antd-v5';
import 'antd/dist/reset.css';

// 1) Helper to infer a Formily field config from a key+value
function inferFieldConfig(key, value) {
  const jsType = typeof value;
  let type, component, options;

  if (jsType === 'number') {
    type = 'number';
    component = 'NumberPicker';
  } else if (jsType === 'boolean') {
    type = 'boolean';
    component = 'Checkbox';        // you'd need to import/register Checkbox
  } else {
    type = 'string';
    component = 'Input';
  }

  // If you want special-casing for enums, you could detect arrays/objects here
  // e.g. if (key === 'gender') { component = 'Select'; options = [ ... ] }

  return {
    name: key,
    type,
    component,
    title: key
      .replace(/([A-Z])/g, ' $1')    // turn "firstName" → "first Name"
      .replace(/^./, str => str.toUpperCase()),
    required: false,
    ...(options ? { options } : {}),
  };
}

export default function DynamicFormFromData() {
  const [formData, setFormData] = useState(null);

  // 2) Simulate fetching your API data
  useEffect(() => {
    // replace this with your real fetch/axios call
    Promise.resolve({ name: 'John Doe', age: 30 }).then(data => {
      setFormData(data);
    });
  }, []);

  // 3) Build fieldsConfig once we have formData
  const fieldsConfig = useMemo(() => {
    if (!formData) return [];
    return Object.entries(formData).map(
      ([key, value]) => inferFieldConfig(key, value)
    );
  }, [formData]);

  // 4) Create the form instance — include initialValues from the API
  const form = useMemo(() => {
    return createForm({
      initialValues: formData || {},
    });
  }, [formData]);

  // 5) Register your components
  const SchemaField = useMemo(() => {
    return createSchemaField({
      components: {
        FormItem,
        Input,
        NumberPicker,
        Select,
        // if you infer booleans → Checkbox, import & register it here
        // Checkbox,
      },
    });
  }, []);

  // 6) Build the Formily JSON Schema dynamically
  const schema = useMemo(() => {
    if (!fieldsConfig.length) return null;
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
    return { type: 'object', properties };
  }, [fieldsConfig]);

  if (!schema) {
    return <div>Loading form…</div>;
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '2rem auto',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: 4,
      }}
    >
      <FormProvider form={form}>
        <SchemaField schema={schema} />
        <Submit onSubmit={v => alert(JSON.stringify(v, null, 2))}>
          Submit
        </Submit>
      </FormProvider>
    </div>
  );
}
