import { renderWithRedux } from "@misk/test"
import React from "react"
import { cleanup } from "react-testing-library"
import { SampleFormContainer } from "../../src/containers"
import { rootReducer } from "../../src/ducks"

describe("SampleFormContainer", () => {
  afterEach(cleanup)
  it("SampleFormContainer can render with redux", () => {
    const { asFragment } = renderWithRedux(rootReducer)(<SampleFormContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
