import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

function SingleTab(props) {
  const { addClass, product, isSize = false } = props;

  return (
    <Tabs
      className={`mb-5 product-single-tabs ${addClass}`}
      selectedTabClassName="active"
      selectedTabPanelClassName="show"
    >
      <TabList className="nav nav-tabs nav-border-anim">
        <Tab className="nav-link">More Info</Tab>
      </TabList>
      <TabPanel className="tab-pane fade">
        <div className="text-dark product-desc-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            quod. Aperiam, cupiditate ad? Sed quae eos, quaerat laudantium
            laboriosam dolor culpa suscipit iusto excepturi et voluptas at eius
            rem dolores?
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default React.memo(SingleTab);
