

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
        'x-component-props': {
    data: docs.map(doc => ({ title: doc })) || []
}
  },
}   
    }   
    }   
