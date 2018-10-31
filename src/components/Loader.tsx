import * as React from "react";
import styled, { css, keyframes } from "../styled-components";

interface Props {
  small?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div<Props>`
  animation: ${fadeIn} ease-in 1;
  animation-duration: 0.25s;

  ${({ small }) =>
    small
      ? css`
          width: 24px;
          margin: 0;
          display: inline;
        `
      : css`
          width: 66px;
          margin: 66px auto;
        `};
`;

const bounce = keyframes`
  33% {
    transform: translateY(-18px);
  }
  66% {
    transform: translateY(0);
  }
`;

const smallBounce = keyframes`
  33% {
    transform: translateY(-4px);
  }
  66% {
    transform: translateY(0);
  }
`;

const Ball = styled.div<Props>`
  border-radius: 100%;
  animation-fill-mode: both;
  display: inline-block;

  ${({ small }) =>
    small
      ? css`
          background-color: currentColor;
          width: 4px;
          height: 4px;
          margin: 0 2px;
        `
      : css`
          background-color: #d6d6d6;
          width: 18px;
          height: 18px;
          margin: 0 2px;
        `};

  &:nth-child(1) {
    animation: ${({ small }) => (small ? smallBounce : bounce)} 0.46s infinite
      ease-in-out;
  }
  &:nth-child(2) {
    animation: ${({ small }) => (small ? smallBounce : bounce)} 0.6s -0.07s infinite
      ease-in-out;
  }
  &:nth-child(3) {
    animation: ${({ small }) => (small ? smallBounce : bounce)} 0.6s 0s infinite
      ease-in-out;
  }
`;

const Loader: React.SFC<Props> = ({ small = false }) => (
  <Wrapper small={small}>
    <Ball small={small} />
    <Ball small={small} />
    <Ball small={small} />
  </Wrapper>
);

Loader.defaultProps = {
  small: false
};

export default Loader;
