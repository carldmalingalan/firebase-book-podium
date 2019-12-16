import React from "react";

function ActivityPanel(props) {
  const datasource = props.datasource || null;

  if (datasource) {
    return (
      <div className="panel-card">
        <h5>Logs</h5>
        {datasource.map((mVal, key) => (
          <div key={key} className="custom-alert">
            {mVal}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="panel-card">
      <h5>Logs</h5>
    </div>
  );
}

export default ActivityPanel;
