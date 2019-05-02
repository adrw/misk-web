import { renderWithRedux } from "@misk/test"
import React from "react"
import { cleanup } from "react-testing-library"
import { SampleNetworkContainer } from "../../src/containers"
import { rootReducer } from "../../src/ducks"

describe("SampleNetworkContainer", () => {
  afterEach(cleanup)
  it("SampleNetworkContainer can render with redux", () => {
    const { asFragment } = renderWithRedux(rootReducer)(
      <SampleNetworkContainer />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
