import { FormGroup, H1, InputGroup } from "@blueprintjs/core"
import * as React from "react"

export interface INetworkProps {
  handleInput: (event: React.FormEvent<HTMLInputElement>) => void
}

export const SampleNetworkComponent = (props: INetworkProps) => (
  <div>
    <H1>Network</H1>
    <FormGroup
      helperText="Helper text with details..."
      label="Label A"
      labelFor="text-input"
      labelInfo="(required)"
    >
      <InputGroup
        id="text-input"
        placeholder="Placeholder text"
        onInput={props.handleInput}
      />
    </FormGroup>
  </div>
)

export default SampleNetworkComponent
