import { Switch } from "@headlessui/react";
import React from "react";

function Toggle({ lable, enabled, onChange }) {
  return (
    <Switch.Group>
      <div className="flex items-center gap-x-2">
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-900" : "bg-secondary-200"
          } relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none transition-colors `}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
        <Switch.Label className="mr-4">{lable}</Switch.Label>
      </div>
    </Switch.Group>
  );
}

export default Toggle;