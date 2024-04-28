import React, { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "../project/ChangeProposalStatus";

function ProposalRow({ proposal, index }) {
  const { user, status } = proposal;
  const [open, setOpen] = useState(false);
  const statusStyle = [
    { lable: "رد شده", className: "badge--danger" },

    { lable: "در انتظار تایید", className: "badge--secondary" },

    { lable: "تایید شده", className: "badge--success" },
  ];

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{truncateText(proposal.description, 25)}</td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}T</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].lable}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            name="status"
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)} className="">
          تغییر وضعیت درخواست
        </button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
