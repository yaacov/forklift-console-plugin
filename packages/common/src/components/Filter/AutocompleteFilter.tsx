import React, { useState } from 'react';

import { ToolbarChip, ToolbarFilter } from '@patternfly/react-core';
import {
  Select,
  SelectOption,
  SelectOptionObject,
  SelectVariant,
} from '@patternfly/react-core/deprecated';

import { SelectEventType, SelectValueType, ToggleEventType } from '../../utils';

import { FilterTypeProps } from './types';

/**
 * Typeahead filter inspired by Console's AutocompleteInput.
 * 
 * **Key features**:<br>
 * 1) match the search pattern in the entire string (not only prefix)<br>
 * 2) reset the filter after selection - the selected item is visible in the chip list

 *
 * **Enum contract**:<br>
 * 1) enum values passed as supportedValues param have id prop the same as the label prop.<br>
 * 2) values in supportedValues are unique (no de-duplication similar to EnumFilter).
 *
 * [<img src="static/media/src/components-stories/assets/github-logo.svg"><i class="fi fi-brands-github">
 * <font color="green">View component source on GitHub</font>](https://github.com/kubev2v/forklift-console-plugin/blob/main/packages/common/src/components/Filter/AutocompleteFilter.tsx) 
 */
export const AutocompleteFilter = ({
  selectedFilters = [],
  onFilterUpdate,
  supportedValues = [],
  title,
  placeholderLabel,
  filterId,
  showFilter = true,
}: FilterTypeProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const validSupported = supportedValues.filter(({ label, id }) => id === label);
  const validSelected = selectedFilters.filter(
    (filterId) => validSupported.filter(({ id }) => id === filterId).length > 0,
  );

  const deleteFilter = (label: string | ToolbarChip | SelectOptionObject): void =>
    onFilterUpdate(validSelected.filter((filterLabel) => filterLabel !== label));

  const hasFilter = (label: string | SelectOptionObject): boolean =>
    !!validSelected.find((filterLabel) => filterLabel === label);

  const addFilter = (label: string | SelectOptionObject): void => {
    if (typeof label === 'string') {
      onFilterUpdate([...validSelected, label]);
    }
  };

  const options = validSupported.map(({ label }) => <SelectOption key={label} value={label} />);

  const onFilter: (
    event: React.ChangeEvent<HTMLInputElement> | null,
    textInput: string,
  ) => React.ReactElement[] | undefined = (_event, textInput) => {
    if (textInput === '') {
      return options;
    }

    return options.filter((child) =>
      child.props.value.toString().toLowerCase().includes(textInput.toLowerCase()),
    );
  };

  const onSelect: (
    event: SelectEventType,
    value: SelectValueType,
    isPlaceholder?: boolean,
  ) => void = (_event, value, isPlaceholder) => {
    if (isPlaceholder) {
      return;
    }
    // behave as Console's AutocompleteInput used i.e. to filter pods by label
    if (!hasFilter(value)) {
      addFilter(value);
    }
    setExpanded(false);
  };

  const onToggle: (isExpanded: boolean, event: ToggleEventType) => void = (isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <ToolbarFilter
      key={filterId}
      chips={validSelected}
      deleteChip={(category, option) => deleteFilter(option)}
      deleteChipGroup={() => onFilterUpdate([])}
      categoryName={title}
      showToolbarItem={showFilter}
    >
      <Select
        variant={SelectVariant.typeahead}
        aria-label={placeholderLabel}
        onSelect={onSelect}
        // intentionally keep the selections list empty
        // the select should pretend to be stateless
        // the selection is stored outside in a new chip
        selections={[]}
        placeholderText={placeholderLabel}
        isOpen={isExpanded}
        onToggle={(e, v) => onToggle(v, e)}
        onFilter={onFilter}
        shouldResetOnSelect={true}
      >
        {options}
      </Select>
    </ToolbarFilter>
  );
};
