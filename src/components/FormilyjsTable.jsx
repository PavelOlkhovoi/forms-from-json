import React from 'react'
import {
  FormItem,
  Input,
  ArrayTable,
  Editable,
  FormButtonGroup,
  Submit,
  Select,
  Checkbox,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    Input,
    ArrayTable,
    Select,
    Checkbox,
  },
})

// Default data to pre-fill the table
const defaultTableData = [
  {
    schluessel: 11, // Simple number
    bezeichnung: 'Schaltschrank', // String value
    wert: null,
    pflichtfeld: false
  },
  {
    schluessel: 22,
    bezeichnung: 'Blechkasten',
    wert: null,
    pflichtfeld: true
  },
  {
    schluessel: 33,
    bezeichnung: 'Schaltraum',
    wert: null,
    pflichtfeld: false
  },
  {
    schluessel: 44,
    bezeichnung: 'RS-Gehäuse Z6',
    wert: null,
    pflichtfeld: true
  }
]

const form = createForm({
  initialValues: {
    schluessel: '',
    bezeichnung: '',
    array: defaultTableData
  }
})

const schema = {
  type: 'object',
  properties: {
    schluessel: {
      type: 'string',
      title: 'Schlüessel',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Enter additional input 1',
      },
    },
    bezeichnung: {
      type: 'string',
      title: 'Bezeichnung',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'Enter additional input 2',
      },
    },
    array: {
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      'x-component-props': {
        pagination: false,
        scroll: { x: '100%' },
      },
      items: {
        type: 'object',
        properties: {
          column1: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 100, title: 'Schlüssel', align: 'center' },
            properties: {
              schluessel: {
                type: 'string',
                'x-decorator': 'Editable',
                'x-component': 'Input',
              },
            },
          },
          column2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 250, title: 'Bezeichnung', align: 'center' },
            properties: {
              bezeichnung: {
                type: 'string',
                'x-decorator': 'Editable',
                'x-component': 'Input',
              },
            },
          },
          column3: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 150, title: 'Wert', align: 'center' },
            properties: {
              wert: {
                type: 'string',
                'x-decorator': 'Editable',
                'x-component': 'Input',
              },
            },
          },
          column4: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 150, title: 'Pflichtfeld', align: 'center' },
            properties: {
              pflichtfeld: {
                type: 'boolean',
                'x-decorator': 'FormItem',
                'x-component': 'Checkbox',
              },
            },
          },
          column5: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Operations',
              dataIndex: 'operations',
              width: 200,
              fixed: 'right',
            },
            properties: {
              item: {
                type: 'void',
                'x-component': 'FormItem',
                properties: {
                  remove: {
                    type: 'void',
                    'x-component': 'ArrayTable.Remove',
                  },
                },
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'ArrayTable.Addition',
          title: 'Add entry',
        },
      },
    },
  },
}

const FormilyjsTable = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={(values) => {
          console.log('Form values:', values)
          alert(JSON.stringify(values, null, 2))
        }}>
          Submit
        </Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default FormilyjsTable
