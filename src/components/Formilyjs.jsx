import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { FormItem, Input, Submit } from '@formily/antd-v5';
import 'antd/dist/reset.css'; // AntD v5 reset styles


const form = createForm();


const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Submit,
  },
});

const Formilyjs = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="username"
          title="Username"
          x-decorator="FormItem"
          x-component="Input"
          required
        />
      </SchemaField>
      <Submit
        onSubmit={values => {
          console.log('Submitted values:', values);
          alert(`You typed: ${values.username}`);
        }}
      >
        Submit
      </Submit>
    </FormProvider>
  );
};

export default Formilyjs;
