import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, IconButtonProps } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const CloseIconButton: React.VFC<IconButtonProps> = (props) => {
  return <StyledIconButton {...props} />;
};

const StyledIconButton = styled(IconButton).attrs((props) => ({
  children: <FontAwesomeIcon icon={faClose} />,
  ...props,
}))`
  width: 2.5rem; // match height
  margin-right: -8px; // cancel out mui padding on right to make flush with edge
`;
