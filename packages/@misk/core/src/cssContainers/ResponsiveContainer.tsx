import styled, { StyledComponent } from "@emotion/styled"

/**
 * <ResponsiveContainer>
 *    <span>Stuff</span>
 * </ResponsiveContainer>
 */

export const ResponsiveContainer: StyledComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    any
  >,
  any
> = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
