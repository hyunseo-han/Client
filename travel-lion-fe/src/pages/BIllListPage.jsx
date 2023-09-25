import React from 'react';
import Header from '../components/BillList/Header';
import BillListBlock from '../components/BillList/BillListBlock';
import Btn from '../components/BillList/Btn';

export default function BillListPage() {
  return (
    <>
      <Header />
      <BillListBlock></BillListBlock>
      <Btn></Btn>
    </>
  );
}