export const schemaTable = {
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

export const schemaMass = {
    type: 'object',
    properties: {
      masttyp: {
        type: 'number',
        title: 'Masstyp',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
      bezeichnung: {
        type: 'string',
        title: 'Bezeichnung',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
      hersteller: {
        type: 'string',
        title: 'Hersteller',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
      wandstaerke: {
        type: 'number',
        title: 'Wandstärke (in mm)',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
      lph: {
        type: 'number',
        title: 'LPH (Lichtpunkthöhe in Meter)',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
      dokumenteArray: {
        type: 'void',
        title: 'Dokumente',
        'x-decorator': 'FormItem',
        'x-component': 'CustomList',
      },
    },
  }

  export const schemaMassWithProps = (docs = ['11', '22', '33']) => {
    return {
    type: 'object',
    properties: {
      masttyp: {
        type: 'number',
        title: 'Masstyp',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-decorator-props': {
            inset: true,
          }
      },
      bezeichnung: {
        type: 'string',
        title: 'Bezeichnung',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-decorator-props': {
            inset: true,
          }
      },
      hersteller: {
        type: 'string',
        title: 'Hersteller',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-decorator-props': {
            inset: true,
          }
      },
      wandstaerke: {
        type: 'number',
        title: 'Wandstärke (in mm)',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-decorator-props': {
            inset: true,
          }
      },
      lph: {
        type: 'number',
        title: 'LPH (Lichtpunkthöhe in Meter)',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-decorator-props': {
            inset: true,
          }
              },
      dokumenteArray: {
        type: 'void',
        title: 'Dokumente',
        'x-decorator': 'FormItem',
        'x-component': 'CustomList',
        'x-component-props': {
    data: docs.map(doc => ({ title: doc })) || []
}
  },
}    }   
    }   

    export const schemaStringArray = {
        type: 'object',
        properties: {
            bauartItems: {
            type: 'array',
            'x-component': 'ArrayItems',
            'x-decorator': 'FormItem',
            items: {
              type: 'void',
              'x-component': 'Space',
              properties: {
                bezeichnung: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      style: { width: 240 }
                    },
                    title: 'Bezeichnung'
                  },
                remove: {
                  type: 'void',
                  'x-decorator': 'FormItem',
                  'x-component': 'ArrayItems.Remove',
                },
              },
            },
            properties: {
              add: {
                type: 'void',
                title: 'Add entry',
                'x-component': 'ArrayItems.Addition',
              },
            },
          },
        },
      }
      