import React from "react";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directorySelector";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div>
      <div className="directory-menu">
        {// map through section
        sections.map(({ id, ...othersectionProps }) => (
          <MenuItem key={id} {...othersectionProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
