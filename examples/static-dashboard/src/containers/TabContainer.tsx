import { IDashboardTab } from "@misk/common"
import { Navbar, OfflineComponent, ResponsiveContainer } from "@misk/components"
import * as React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { ScriptComponent } from "../components"
import { dispatchLoader, IState } from "../ducks"
import { mockAdminDashboardTabs, mockServiceMetadata } from "../utils"

export interface ILoaderProps extends IState {
  getTabs: (url: string) => any
  getComponent: (tab: IDashboardTab) => any
  getServiceMetadata: (url: string) => any
}

const TabContainer = styled(ResponsiveContainer)`
  position: relative;
  top: 110px;
  padding-left: 5px;
`

const tabsUrl = "/api/admindashboardtabs"
const serviceUrl = "/api/service/metadata"

class LoaderContainer extends React.Component<ILoaderProps> {
  async componentDidMount() {
    this.props.getTabs(tabsUrl)
    this.props.getServiceMetadata(serviceUrl)
  }

  render() {
    const adminDashboardTabs = mockAdminDashboardTabs
    const serviceMetadata = mockServiceMetadata
    const error: any = null
    const unavailableEndpointUrls: string = ""
    if (adminDashboardTabs && serviceMetadata) {
      return (
        <span>
          <Navbar
            environment={serviceMetadata.environment}
            links={adminDashboardTabs}
            homeName={serviceMetadata.app_name}
            homeUrl={serviceMetadata.admin_dashboard_url}
            navbar_items={serviceMetadata.navbar_items}
            status={serviceMetadata.navbar_status}
          />
          <TabContainer>
            {Object.entries(adminDashboardTabs).map(([key, tab]) => (
              <ScriptComponent key={key} tab={tab} />
            ))}
          </TabContainer>
        </span>
      )
    } else {
      return (
        <span>
          <Navbar />
          <TabContainer>
            <OfflineComponent
              error={error}
              title={"Error Loading Multibound Admin Tabs"}
              endpoint={unavailableEndpointUrls}
            />
          </TabContainer>
        </span>
      )
    }
  }
}

const mapStateToProps = (state: IState) => ({
  loader: state.loader.toJS(),
  router: state.router
})

const mapDispatchToProps = {
  getComponent: dispatchLoader.getOneComponent,
  getServiceMetadata: dispatchLoader.getServiceMetadata,
  getTabs: dispatchLoader.getAllTabs
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderContainer)
