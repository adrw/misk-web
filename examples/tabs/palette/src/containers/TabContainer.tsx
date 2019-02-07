import { response } from "@misk/core"
import * as React from "react"
import { connect } from "react-redux"
import { SampleTableComponent, SampleNetworkComponent } from "../components"
import { IDispatchProps, IState, rootDispatcher, rootSelectors } from "../ducks"

interface IContainerProps extends IState, IDispatchProps {}

class TabContainer extends React.Component<IContainerProps, IState> {
  componentDidMount() {
    this.props.get(
      "cars",
      "https://square.github.io/misk-web/examples/data/demo/cars.json"
    )
  }

  render() {
    const { simpleNetwork } = this.props
    return (
      <div>
        <SampleTableComponent data={response(simpleNetwork, "cars")} rows={5} />
        <SampleNetworkComponent
          handleInput={(event: React.FormEvent<HTMLInputElement>) =>
            console.log(event.target)
          }
        />
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => rootSelectors(state)

const mapDispatchToProps = {
  ...rootDispatcher
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabContainer)
