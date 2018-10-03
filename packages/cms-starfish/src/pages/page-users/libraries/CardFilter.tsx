import * as React from "react";
import { Card, Form } from "antd";
import { TextSearch } from "../../../components/text-search";
import { SelectFilter } from "./SelectFilter";
import { TextRight } from "../../../components/text-right";

export class CardFilter extends React.Component {
  render() {

    const FormItem = Form.Item;
    
    return (
      <Card>
        <TextRight>1.666 Users</TextRight>
        <Form layout="inline">
          <FormItem>
            <TextSearch TextPlacholder="Search Email..." />
          </FormItem>
          <FormItem label="Role">
            <SelectFilter />
          </FormItem>
        </Form>
      </Card>
    );
  }
}
export default CardFilter;
