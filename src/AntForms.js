import React from "react";
import { Button, Form, Input } from "antd";

const AntForms = () => {
  function submitform(values) {
    console.log(values);
  }

  const initialValues = {
    username: "Musarraf",
    password: "123",
    emails: [""],
  };

  return (
    <div>
      <h1>Ant Forms</h1>
      <Form
        layout="vertical"
        style={{ width: 500 }}
        onFinish={submitform}
        initialValues={initialValues}
      >
        <Form.Item
          name="username"
          label="username"
          required
          rules={[
            { required: true, message: "Username is Mandatory" },
            { min: 4, message: "Lenght should be minimum 4." },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="password"
          required
          rules={[{ required: true }]} //If we dont provde message default message will be shown.
        >
          <Input type="password" />
        </Form.Item>

        <Form.List name="emails">
          {(emails, { add, remove }) => (
            <div>
              {emails.map((email, index) => (
                <div>
                  <Form.Item {...email} label="email">
                    <Input />
                  </Form.Item>
                  <button onClick={()=>{add()}}>ADD</button>
                  {index !== 0 && (<button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Remove
                  </button>)}
                </div>
              ))}
            </div>
          )}
        </Form.List>

        <Button htmlType="submit" type="primary">
          Submit{" "}
        </Button>
      </Form>
    </div>
  );
};

export default AntForms;
