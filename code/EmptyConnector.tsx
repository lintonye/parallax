import * as React from "react";

interface Props {
  title: string;
  description: string;
}

class EC extends React.Component<Props> {
  render() {
    const containerStyle: React.CSSProperties = {
      color: "#8855FF",
      background: "rgba(136, 85, 255, 0.1)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      padding: 5
    };
    const h1Style: React.CSSProperties = {
      fontSize: 43,
      margin: "15px 0 0px 0"
    };
    const { title, description } = this.props;
    return (
      <div style={containerStyle}>
        <h1 style={h1Style}>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export const EmptyConnector = EC;
