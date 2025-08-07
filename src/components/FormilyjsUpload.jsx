import {
  Upload,
  FormItem,
  FormButtonGroup,
  Submit,
  Input,
  FormLayout,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button, List } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const dataDemo = [
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

const CustomList = ({data = dataDemo}) => {
  
  return (
    <List
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




const FormilyjsUpload = ({defaultValues = {}, schema = {}}) => {
  const SchemaField = createSchemaField({
    components: {
      FormItem,
      CustomList,
      Input,
    },
  })
  
  const form = createForm({
    initialValues: defaultValues,
  })
  

  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={18} layout="horizontal">
        <SchemaField schema={schema} />
        <FormButtonGroup.FormItem>
          <Submit onSubmit={(values) => {
            console.log('xxx Form values:', values)
          }}>
            Submit
          </Submit>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}

export default FormilyjsUpload
