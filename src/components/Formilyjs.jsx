import React from 'react'
import { FormItem, Input } from '@formily/antd-v5'
import { createForm, onFormValuesChange } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { FormButtonGroup, Submit } from '@formily/antd-v5'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm({
  initialValues: {
    input: 'Hello World',
    input2: 'Second Default',
  },
  effects() {
    onFormValuesChange(({ values, changed }) => {
      console.log('xxx Form values changed:', values)
      console.log('xxx Fields that changed this time:', changed)
    })
  },
})

const schema = {
  type: 'object',
  properties: {
    // first input
    input: {
      type: 'string',
      title: 'First Input',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        style: { width: 240 },
      },
    },
    // second input
    input2: {
      type: 'string',
      title: 'Second Input',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Type something…',
        style: { width: 240 },
      },
    },
  },
}

const Formilyjs = () => {
  return (
    <FormProvider form={form}>
    <SchemaField schema={schema} />
    <FormButtonGroup>
      <Submit onSubmit={v => alert(JSON.stringify(v, null, 2))}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
  )
}

export default Formilyjs
