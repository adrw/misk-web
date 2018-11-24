import {
  get,
  Navbar,
  OfflineComponent,
  ResponsiveContainer,
  TabLoaderComponent
} from "@misk/components"
import * as React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { IState } from "../ducks"
import { mockAdminDashboardTabs, mockServiceMetadata } from "../utils"

export interface ILoaderProps extends IState {}

const TabContainer = styled(ResponsiveContainer)`
  position: relative;
  top: 110px;
  padding-left: 5px;
`

class LoaderContainer extends React.Component<ILoaderProps, { data: any }> {
  state = {
    data: null as any
  }
  render() {
    // add JSON files for this and have real web requests that ping the static JSON on github with fallback to static to show web request loading
    const adminDashboardTabs = mockAdminDashboardTabs
    // add JSON files for this and have real web requests that ping the static JSON on github with fallback to static to show web request loading
    const serviceMetadata = mockServiceMetadata
    const error: any = null
    const unavailableEndpointUrls: string = ""
    // find all ways to simplify this, move it out to the palette tab
    // create our own test json data so it's not just blog posts (don't use pepsi to model nukes)
    const response = get("https://jsonplaceholder.typicode.com/posts/")
    try {
      response.then(resp => this.setState({ data: resp.data }))
    } catch (error) {
      console.log(error)
    }
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
            <TabLoaderComponent tabs={adminDashboardTabs} />
            <span>{this.state.data ? this.state.data.length : 0}</span>
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

export default connect(mapStateToProps)(LoaderContainer)
