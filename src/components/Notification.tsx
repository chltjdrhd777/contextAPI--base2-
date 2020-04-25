import React, { Fragment } from "react";
import styled, { StyledComponent } from "styled-components";
import Flex, { FlexItem } from "typescript-styled-flex";

type NotiPropType = {
  id?: number;
  text: string;
  seen: boolean;
};

const Notification = styled.div<{ seen: boolean }>``;
const Title = styled.span``;

//the es6 expression about the contents of props => {id,text,seen}
//which means I wanna select the exact properties among numerous ones in props
const NotificationPresenter = ({ id, text, seen }: NotiPropType) => {
  return (
    <Notification seen={seen}>
      <Flex alignCenter justifyBetween>
        <Title>{text}</Title>
      </Flex>
    </Notification>
  );
};

export default NotificationPresenter;
