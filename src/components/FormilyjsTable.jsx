import React from 'react'
import {
  FormItem,
  Input,
  ArrayTable,
  Editable,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    Input,
    ArrayTable,
  },
})

const defaultTableData = [
  {
    schluessel: '1', // Using key from enum
    bezeichnung: '1', // Using key from enum
    status: 'active',
    wert: true,
    pflichtfeld: false
  },
  {
    schluessel: '2',
    bezeichnung: '2',
    wert: false,
    pflichtfeld: true
  },
  {
    schluessel: '3',
    bezeichnung: '3',
    wert: true,
    pflichtfeld: false
  },
  {
    schluessel: '4',
    bezeichnung: '4',
    wert: false,
    pflichtfeld: true
  }
]

const form = createForm({
  initialValues: {
    array: defaultTableData
  }
})

const schema = {
  type: 'object',
  properties: {
    array: {
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      'x-component-props': {
        pagination: false,
        scroll: { x: '100%' },
        // rowSelection: true
      },
      items: {
        type: 'object',
        properties: {
          column1: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 50, title: 'Schlüssel', align: 'center' },
            properties: {
              schluessel: {
                type: 'void',
                'x-component': 'ArrayTable.Index',
              },
            },
          },
          column2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 80, title: 'Bezeichnung', align: 'center' },
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
            'x-component-props': { width: 200, title: 'Wert', align: 'center' },
            properties: {
              wert: {
                type: 'boolean',
                'x-component': 'Checkbox',
              },
            },
          },
          column4: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 200, title: 'pflichtfeld', align: 'center' },
            properties: {
              pflichtfeld: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Checkbox',
              },
            },
          },
          column6: {
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
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

export default FormilyjsTable
