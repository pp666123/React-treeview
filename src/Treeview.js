import React, { Component } from 'react';
import './treeview.css';
import { MinusSquare, PlusSquare } from 'react-feather';

let treeData =
{
  groupDropOptionId: 39,
  groupDropFieldId: 6,
  parentId: 0,
  name: 'ooo',
  exportValue: 'BD',
  showChildren: true,
  editMode: false,
  children: [
    //course count
    {
      groupDropOptionId: 40,
      groupDropFieldId: 6,
      parentId: 39,
      name: '1：xxx',
      exportValue: '1',
      showChildren: true,
      editMode: false,
      children: [
        {
          groupDropOptionId: 41,
          groupDropFieldId: 6,
          parentId: 40,
          name: '2：xxx',
          exportValue: '101',
          showChildren: false,
          editMode: false,
          children: []
        }, {
          groupDropOptionId: 42,
          groupDropFieldId: 6,
          parentId: 40,
          name: '3：xxx',
          exportValue: '102',
          showChildren: true,
          editMode: false,
          children: []
        }, {
          groupDropOptionId: 42,
          groupDropFieldId: 6,
          parentId: 40,
          name: '4：xxx',
          exportValue: '102',
          showChildren: true,
          editMode: false,
          children: []
        }, {
          groupDropOptionId: 42,
          groupDropFieldId: 6,
          parentId: 40,
          name: '5：xxx',
          exportValue: '102',
          showChildren: true,
          editMode: false,
          children: []
        }, {
          groupDropOptionId: 42,
          groupDropFieldId: 6,
          parentId: 40,
          name: '6：xxx',
          exportValue: '102',
          showChildren: true,
          editMode: false,
          children: []
        }, {
          groupDropOptionId: 41,
          groupDropFieldId: 6,
          parentId: 40,
          name: '1-1：xxx',
          exportValue: '101',
          showChildren: false,
          editMode: false,
          children: [{
            groupDropOptionId: 41,
            groupDropFieldId: 6,
            parentId: 40,
            name: '1-2：xxx',
            exportValue: '101',
            showChildren: false,
            editMode: false,
            children: []
          }, {
            groupDropOptionId: 41,
            groupDropFieldId: 6,
            parentId: 40,
            name: '1-3：xxx',
            exportValue: '101',
            showChildren: false,
            editMode: false,
            children: []
          }, {
            groupDropOptionId: 41,
            groupDropFieldId: 6,
            parentId: 40,
            name: '1-4：xxx',
            exportValue: '101',
            showChildren: false,
            editMode: false,
            children: []
          }, {
            groupDropOptionId: 41,
            groupDropFieldId: 6,
            parentId: 40,
            name: '1-5：xxx',
            exportValue: '101',
            showChildren: false,
            editMode: false,
            children: []
          }]
        }
      ]
    }
  ]
};





export default class Treeview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: treeData,
      editableNode: ''
    }
  }

  toggleView = (ob) => {
    ob.showChildren = !ob.showChildren;
    this.setState({ ob });
  }

  makeChildren = (node) => {
    if (typeof node === 'undefined' || node.length === 0) return null;

    let children;
    children = node.map((value, index) => {

      let item = null;

      // A node has children and want to show her children
      if (value.children.length > 0 && value.showChildren) {
        let babies = this.makeChildren(value.children);
        let normalMode = (
          <div className={`d-flex align-items-center view${index} `} style={{ position: "relative", top: "-7px", marginLeft: "2px", cursor: "pointer" }}>            <MinusSquare width={20} />
            <div className="node ms-2" style={{ backgroundColor: "#CFF4FC", border: "1px solid", borderColor: "#59B9DF", borderRadius: "2px", padding: "0.5em" }}>{value.name}

            </div>
          </div>
        )
        item = (
          <li key={index} onClick={(e) => { e.stopPropagation(); this.toggleView(value) }}>
            {(value.editMode) ? this.nodeEditForm(value, node, index) : normalMode}
            {babies}
          </li>
        )
      }

      // A node has children but don't want to showing her children
      else if (value.children.length > 0 && !value.showChildren) {
        item = (
          <li key={index} onClick={(e) => { e.stopPropagation(); this.toggleView(value) }}>
            <div className={`d-flex align-items-center view${index} `} style={{ position: "relative", top: "-7px", marginLeft: "2px", cursor: "pointer" }}>
              <PlusSquare width={20} />
              <div className="node ms-2" style={{ backgroundColor: "#CFF4FC", border: "1px solid", borderColor: "#59B9DF", borderRadius: "2px", padding: "0.5em" }}>
                {value.name}
              </div>
            </div>
          </li>
        );
      }

      // A node has no children
      else if (value.children.length === 0) {
        let normalMode = (
          <div className={`node ms-1`}>{value.name}
          </div>
        );

        item = (
          <li key={index} onClick={(e) => e.stopPropagation()}>
            {(value.editMode) ? this.nodeEditForm(value, node, index) : normalMode}
          </li>
        );
      }
      return item;
    });

    return (
      <ul className={`treeview`}>
        {children}
      </ul>
    );
  }

  getNodes = () => {
    if (typeof this.state.data.name === 'undefined') return null;
    let children = this.makeChildren(this.state.data.children);
    let root = (
      <span className="root m-0">
        <h4 className='m-0' style={{ border: "1px solid", borderColor: "#59B9DF", borderRadius: "2px", padding: "0.5em", color: "#59B9DF" }}>{this.state.data.name}</h4>
        <span className="actions"> &nbsp;  &nbsp;</span>
      </span>

    )
    return (
      <div className="tree">
        {(this.state.data.editMode) ? this.nodeEditForm(this.state.data) : root}
        {children}
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <div>
          <div className="group_dropdown_content">
            {this.getNodes()}
          </div>
        </div>
      </div>
    );
  }
}

