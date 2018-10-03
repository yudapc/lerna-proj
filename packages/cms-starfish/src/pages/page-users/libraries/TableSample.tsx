import * as React from "react";
import { Table } from "bmdcomponents";
import { Modal, Button, Select } from "antd";
import { VerticalLayoutGroup } from "../../../components/vertical-layout"

export class TableSample extends React.Component {

  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    console.log('Clicked cancel button');
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {

    const { visible, loading } = this.state;

    const Option = Select.Option;

    const columns = [
      {
        key: "name",
        title: "Name",
        dataIndex: "name"
      },
      {
        key: "email",
        title: "Email",
        dataIndex: "email"
      },
      {
        key: "role",
        title: "Role",
        dataIndex: "role"
      },
      {
        key: "action",
        title: "",
        dataIndex: "action",
        className:"bt-cms-table-action",
        render: (text, record) => {
          return (
            <a
              href="javascript:;"
              onClick={() => this.showModal()}
            >
              Change
            </a>
          );
        }
      }
    ];

    const data = [
      {
        key: "1",
        name: "Matt Murdock",
        email: "matt@thedefenders.com",
        role: "Super Admin"
      },
      {
        key: "2",
        name: "Luke Cage",
        email: "luke@thedefenders.com",
        role: "Developer"
      },
      {
        key: "3",
        name: "Danny Rand",
        email: "danny@thedefenders.com",
        role: "CSO"
      },
      {
        key: "4",
        name: "Jessica Jones",
        email: "jessica@thedefenders.com",
        role: "SEO"
      },
      {
        key: "5",
        name: "Frank Castle",
        email: "frank@punisher.com",
        role: "Finance"
      },
      {
        key: "6",
        name: "Hernan Alvarez",
        email: "shades@hpclub.com",
        role: "Marketing"
      },
      {
        key: "7",
        name: "Colleen Wing",
        email: "colleen@chikaradojo.com",
        role: "Partnership"
      },
      {
        key: "8",
        name: "Malcolm Ducasse",
        email: "malcolm@aliaspi.com",
        role: "Guest"
      },
      {
        key: "9",
        name: "Misty Knight",
        email: "misty@nyc.gov",
        role: "Guest"
      },
      {
        key: "10",
        name: "Claire Temple",
        email: "claire@metrogeneral.com",
        role: "Guest"
      }
    ];
    return (
      <div>
        <Table dataSource={data} columns={columns} />
        <Modal
            title="Change user role?"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                Change
              </Button>,
            ]}
          >
          <p>Matt Murdock<br />
          matt@thedefenders.com</p>
          <div className="bt-modal-inline">
            <VerticalLayoutGroup labelText="Current Role">
              <span className="ant-form-text">Super Admin</span>
            </VerticalLayoutGroup>
            <VerticalLayoutGroup labelText="New Role">
              <Select defaultValue="guest" style={{ width: 200 }}>
                <Option value="developer">Developer</Option>
                <Option value="guest">Guest</Option>
                <Option value="marketing">Marketing</Option>
                <Option value="cso">CSO</Option>
              </Select>
            </VerticalLayoutGroup>
          </div>
        </Modal>
      </div>
    );
  }
}
export default TableSample;
