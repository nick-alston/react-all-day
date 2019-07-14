import * as React from "react";

export interface Props {
  values: number[];
}

export class Breadcrumb extends React.PureComponent<Props> {
  render() {
    return (
      <div className="breadcrumb">
        <ul>
          {this.props.values.map(val => {
            return (<li key={val}>{val.toFixed(3)}</li>);
          })}
        </ul>
      </div>
    );
  }
}
