import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

const ProfileContent = () => {
  return (
    <Tabs
      defaultActiveKey="work"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="work" title="Work">
        Tab content for Work
      </Tab>
      <Tab eventKey="insights" title="Insights">
        Tab content for Insigts
      </Tab>
    </Tabs>
  )
}

export default ProfileContent