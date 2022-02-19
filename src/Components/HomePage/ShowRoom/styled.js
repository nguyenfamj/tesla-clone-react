import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("/images/${props.image}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  postion: fixed;
  padding-top: 15vh;
  text-align: center;
`;

export const Buttons = styled.div`
  margin-bottom: 20px;
`;
export const FunctionButtons = styled.div`
  display: flex;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  margin: 20px 12px 0px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 504px;
  }
`;
export const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
`;

export const DownArrow = styled.img`
  margin-top: 10px;
  height: 24px;
  margin-left: auto;
  margin-right: auto;
  animation: downAnimation infinite 2.3s;
`;
