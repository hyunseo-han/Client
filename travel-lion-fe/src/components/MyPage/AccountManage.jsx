import React from 'react';
import styled from 'styled-components';
import MyPageHeader from './MyPageHeader';
// 변경 버튼 요상한데 가있어서 다시 해야해염 호호 히히 ..

const AccountManage = () => {
  return (
    <>
      <MyPageHeader />
      <Container>
        <ProfileImg />
        <div>
          <Text>닉네임</Text>
          <InputWrapper>
            <Input placeholder="닉네임"></Input>
            <ChangeBtn>변경</ChangeBtn>
          </InputWrapper>
        </div>
      </Container>
    </>
  );
};

export default AccountManage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  width: 390px;
  margin: auto;
  position: relative;
  gap: 25px;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: url(''), lightgray 50% / cover no-repeat;
`;

const Text = styled.div`
  color: var(--Navy, #001240);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 7px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 328px;
  height: 54px;
  padding: 15px 18px 14px 18px;
  align-items: center;
  gap: 208px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 8px;
  background: #efefef;
`;

const Input = styled.input`
  background-color: inherit;
  border: none;
  color: var(--Darkgray, #353a40);
  flex-grow: 1;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ChangeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 22px;
  padding: 5px 7px;
  border-radius: 3px;
  background: #05b70c;
`;
