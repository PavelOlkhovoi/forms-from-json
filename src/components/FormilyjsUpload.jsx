import {
  Upload,
  FormItem,
  FormLayout,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button, List } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'

const CustomList = (props) => {
  const data = [
    {
      title: 'quarterly_report.pdf',
    },
    {
      title: 'project_overview.pdf',
    },
    {
      title: 'product_screenshot.png',
    },
  ];
  return (
    <List
      {...props}
      style={{ marginLeft: '10px', marginTop: '-7px' }}
      dataSource={data}
      renderItem={item => <List.Item>{item.title}</List.Item>}
    />
  )
}


const NormalUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>Upload files</Button>
    </Upload>
  )
}


const SchemaField = createSchemaField({
  components: {
    NormalUpload,
    FormItem,
    CustomList,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    upload: {
      type: 'array',
      title: 'Documents',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'NormalUpload',
    },
    customList: {
      type: 'void',
      title: 'Custom List',
      'x-decorator': 'FormItem',
      'x-component': 'CustomList',
    },
  },
}

const FormilyjsUpload = () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={16}>
      <SchemaField schema={schema} />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)

export default FormilyjsUpload
