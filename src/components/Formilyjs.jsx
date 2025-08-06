import React, { useState } from 'react'
import { FormItem, Input } from '@formily/antd-v5'
import { createForm, onFormValuesChange } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { FormButtonGroup, Submit } from '@formily/antd-v5'
import { Button } from 'antd'
import { bauart } from '../data/dataExample'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm({
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
  const transformFormData = (formValues) => {
    const transformedData = []
    
    Object.entries(formValues).forEach(([key, value]) => {
      transformedData.push({
        id: key,
        bezeichnung: value
      })
    })
    return transformedData.sort((a, b) => a.id - b.id)
  }

  const handleSubmit = (formValues) => {
    const originalData = formValues
    const transformedData = transformFormData(formValues)
    
    console.log('Original form data:', originalData)
    console.log('Transformed data:', transformedData)
    

  }

  // Generate dynamic schema based on current fields
  const generateSchema = () => {
    const baseProperties = {}

    bauart.data.bauart.forEach(bauart => {
      baseProperties[bauart.id] = {
        type: 'string',
        title: "Bezeichnung",
        default: bauart.bezeichnung,
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
          style: { width: 240 },
        },
      }
    })

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
        <Button type="dashed" onClick={addDynamicField} block>
          + Add New Input
        </Button>
      </div>

      <FormButtonGroup>
        <Submit onSubmit={handleSubmit}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default Formilyjs
