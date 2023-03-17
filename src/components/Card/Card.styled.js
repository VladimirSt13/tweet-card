import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardHeader = styled.div`
  position: relative;
  padding: 26px 36px 28px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 0;
    left: 0;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const UserContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  padding: ${(p) => p.theme.space[3]}px ${(p) => p.theme.space[3]}px
    ${(p) => p.theme.space[6]}px;

  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -56%);
  width: 80px;
  height: 80px;

  background-color: #ebd8ff;

  border-radius: 50%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
    inset 0px 4px 2px #fbf8ff;
`;

export const Avatar = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  background-color: #5736a3;

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const CardText = styled.p`
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;

  &:not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[4]}px;
  }
`;

export const CardButton = styled.button`
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  background: ${(props) => (!props.isFollowing ? `#ebd8ff` : `#5CD3A8`)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  outline: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  transition: background-color 250ms linear;

  &:hover,
  :focus-visible {
    background-color: #d3a9ff;
  }
`;
