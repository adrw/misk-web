import { renderWithRedux } from "@misk/test"
import React from "react"
import { cleanup } from "react-testing-library"
import { TabContainer } from "../../src/containers"
import { rootReducer } from "../../src/ducks"

describe("TabContainer", () => {
  afterEach(cleanup)
  it("TabContainer can render with redux", () => {
    const { asFragment } = renderWithRedux(rootReducer)(<TabContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
