import { useState } from "react";
import styled from "styled-components";

interface IPropsData {
  open: boolean;
}

const BasicModal = (props: IPropsData) => {
  const [ModalOpen, setModalOpen] = useState(props.open);

  return <>{ModalOpen ? <Wrap></Wrap> : ""}</>;
};

export default BasicModal;

const Wrap = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
