import React, { useState } from 'react'
import { FormItem, Input, ArrayItems } from '@formily/antd-v5'
import { createForm, onFormValuesChange } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { FormButtonGroup, Submit } from '@formily/antd-v5'
import { Button } from 'antd'
import { bauart } from '../data/dataExample'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    ArrayItems,
  },
})

// Convert bauart data to array format for initial values
const getInitialBauartData = () => {
  return bauart.data.bauart.map(item => ({
    id: item.id,
    bezeichnung: item.bezeichnung
  }))
}

const form = createForm({
  initialValues: {
    bauartItems: getInitialBauartData()
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
  const [fieldCounter, setFieldCounter] = useState(3)

  const addDynamicField = () => {
    const newField = {
      key: `dynamic_key_${fieldCounter}`,
      title: `Dynamic Input ${fieldCounter - 2}`,
      placeholder: `Enter value for field ${fieldCounter - 2}...`
    }
    setDynamicFields([...dynamicFields, newField])
    setFieldCounter(fieldCounter + 1)
  }

  const removeDynamicField = (keyToRemove) => {
    setDynamicFields(dynamicFields.filter(field => field.key !== keyToRemove))
    form.deleteValuesIn(keyToRemove)
  }

  const handleSubmit = (formValues) => {
    console.log('Form data (already in array format):', formValues.bauartItems)
    
    // The data is already in the desired format!
    console.log('xxx form value', formValues)
  }

  // Generate schema with array structure
  const generateSchema = () => {
    const baseProperties = {
      bauartItems: {
        type: 'array',
        'x-decorator': 'FormItem',
        'x-component': 'ArrayItems',
        items: {
          type: 'object',
          properties: {
            // id: {
            //   type: 'number',
            //   'x-decorator': 'FormItem',
            //   'x-component': 'Input',
            //   'x-component-props': {
            //     disabled: true,
            //     style: { width: 80 }
            //   },
            //   title: 'ID'
            // },
            bezeichnung: {
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
              'x-component-props': {
                style: { width: 240 }
              },
              title: 'Bezeichnung'
            }
          }
        }
      }
    }

    // Add dynamic fields to schema
    dynamicFields.forEach(field => {
      baseProperties[field.key] = {
        type: 'string',
        title: "Bezeichnung",
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
        <Button type="dashed" onClick={addDynamicField} block style={{ marginBottom: '8px' }}>
          + Add Custom Input
        </Button>
      </div>

      <FormButtonGroup>
        <Submit onSubmit={handleSubmit}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Formilyjs
