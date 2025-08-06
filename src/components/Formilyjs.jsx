import React, { useState } from 'react'
import { FormItem, Input } from '@formily/antd-v5'
import { createForm, onFormValuesChange } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { FormButtonGroup, Submit } from '@formily/antd-v5'
import { Button } from 'antd'

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

const Formilyjs = () => {
  const [dynamicFields, setDynamicFields] = useState([])
  const [fieldCounter, setFieldCounter] = useState(3) // Start from 3 since we have input and input2

  // Function to add a new dynamic field
  const addDynamicField = () => {
    const newField = {
      key: `dynamic_input_${fieldCounter}`,
      title: `Dynamic Input ${fieldCounter - 2}`,
      placeholder: `Enter value for field ${fieldCounter - 2}...`
    }
    setDynamicFields([...dynamicFields, newField])
    setFieldCounter(fieldCounter + 1)
  }

  // Function to remove a dynamic field
  const removeDynamicField = (keyToRemove) => {
    setDynamicFields(dynamicFields.filter(field => field.key !== keyToRemove))
    // Also remove the value from form
    form.deleteValuesIn(keyToRemove)
  }

  // Generate dynamic schema based on current fields
  const generateSchema = () => {
    const baseProperties = {
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
    }

    // Add dynamic fields to schema
    dynamicFields.forEach(field => {
      baseProperties[field.key] = {
        type: 'string',
        title: field.title,
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
          placeholder: field.placeholder,
          style: { width: 240 },
          addonAfter: (
            <Button 
              size="small" 
              danger 
              onClick={() => removeDynamicField(field.key)}
            >
              ×
            </Button>
          )
        },
      }
    })

    return {
      type: 'object',
      properties: baseProperties
    }
  }

  return (
    <FormProvider form={form}>
      <SchemaField schema={generateSchema()} />
      
      <div style={{ margin: '16px 0' }}>
        <Button type="dashed" onClick={addDynamicField} block>
          + Add New Input
        </Button>
      </div>

      <FormButtonGroup>
        <Submit onSubmit={v => alert(JSON.stringify(v, null, 2))}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Formilyjs
