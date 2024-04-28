import React from "react";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposal from "./useProposal";
import Loading from "../../ui/Loading";

function ProposalTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName={درخواست} />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th> توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow proposal={proposal} index={index} key={proposal._id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
