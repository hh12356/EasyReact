import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'

import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { createArticleAPI, getChannelAPI } from '@/apis/article'
import { useChannel } from '@/hooks/useChannel'

const { Option } = Select

const Publish = () => {
  const { channelList } = useChannel()

    //提交表单
    const onFinish = (formValue)=>{
        //校验封面数量是否匹配
        if(imageList.length!==imageType) return message.warning('封面类型与图片数量不匹配')
        const {title,content,channel_id} = formValue
        //1.按照接口文档处理表单数据
        const reqData={
            title,
            content,
            cover:{
                type:imageType,//当前的封面模式
                image:imageList.map(item=>item.response.data.url)//图片列表
            },
            channel_id
        }
        //2.调用接口提交
        createArticleAPI(reqData)
    }

    //上传回调
    const [imageList,setImageList] = useState([])
    const onChange= (value)=>{
      setImageList(value.fileList)
    }

    //切换图片封面类型
    const [imageType,setImageType] = useState(1)
    const onTypeChange = (e)=>{
      setImageType(e.target.value)
    }

    useEffect(()=>{
      setImageList([])
    },[imageType])


  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                {/* value属性在用户选中后会被收集作为接口提交字段 */}
              {channelList.map(item=><Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
          </Form.Item>

          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType>0&&<Upload
              listType="picture-card"//选择框的外观样式
              showUploadList//控制显示上传列表
              action={'https://geek.itheima.net/v1_0/upload'}
              name='image'
              onChange={onChange}
              maxCount={imageType}
              fileList={imageList}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>}
            
          </Form.Item>
          
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
            >
                {/* 富文本编辑器 */}
                <ReactQuill
                    className='publish-quill'
                    theme='snow'
                    placeholder='请输入文章内容'
                />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish