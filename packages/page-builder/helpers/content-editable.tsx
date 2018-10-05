import React, { Component, createRef } from "react";

interface WrappedComponentProps {
  onSave?: void;
  editOnClick?: void;
  value?: any;
}
interface WrappedComponentState {
  editing: boolean;
}
export const ContentEditable = (WrappedComponent: any) => {
  return class extends Component<WrappedComponentProps, WrappedComponentState> {
    state = {
      editing: false
    };

    private myRef = createRef<typeof WrappedComponent>();

    toggleEdit = (e: Event) => {
      e.stopPropagation();
      if (this.state.editing) {
        this.cancel();
      } else {
        this.edit();
      }
    };

    edit = () => {
      this.setState(
        {
          editing: true
        },
        () => {
          this.myRef.current.focus();
        }
      );
    };

    save = () => {
      this.setState(
        {
          editing: false
        },
        () => {
          if (this.props.onSave && this.isValueChanged()) {
            console.log("Value is changed", this.myRef.current.textContent);
          }
        }
      );
    };

    cancel = () => {
      this.setState({
        editing: false
      });
    };

    isValueChanged = () => {
      return this.props.value !== this.myRef.current.textContent;
    };

    handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;
      switch (key) {
        case "Enter":
        case "Escape":
          this.save();
          break;
      }
    };

    render() {
      let editOnClick = true;
      const { editing } = this.state;
      if (this.props.editOnClick !== undefined) {
        editOnClick = this.props.editOnClick;
      }
      return (
        <WrappedComponent
          className={editing ? "editing" : ""}
          onClick={editOnClick ? this.toggleEdit : undefined}
          contentEditable={editing}
          ref={this.myRef}
          onBlur={this.save}
          onKeyDown={this.handleKeyDown}
          {...this.props}
        >
          {this.props.value}
        </WrappedComponent>
      );
    }
  };
};
export default ContentEditable;
