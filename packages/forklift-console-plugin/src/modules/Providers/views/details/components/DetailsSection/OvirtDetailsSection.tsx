import React from 'react';
import { useForkliftTranslation } from 'src/utils/i18n';

import { V1beta1Provider } from '@kubev2v/types';
import { DescriptionList } from '@patternfly/react-core';

import { DetailsItem } from '../../../../utils';

import {
  CreatedAtDetailsItem,
  CredentialsDetailsItem,
  ExternalManagementLinkDetailsItem,
  NameDetailsItem,
  NamespaceDetailsItem,
  OwnerDetailsItem,
  TypeDetailsItem,
  URLDetailsItem,
} from './components';
import { DetailsSectionProps } from './DetailsSection';
import { getProviderUIAnnotation } from './utils';

export const OvirtDetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
  const { t } = useForkliftTranslation();

  const { provider, permissions } = data;

  /**
   * A function for auto calculating the RHV UI link.
   * It extracts the provider's RHV UI link from the RHV URL by searching for the URL's path of
   * '/ovirt-engine/api[/]' and cutting out the /api[/] path section.
   * If RHV URL is invalid then an empty string is returned
   */
  const getProviderUiContent = (provider: V1beta1Provider): string => {
    // Check for custom link
    const customLink = getProviderUIAnnotation(provider);
    if (customLink) {
      return customLink;
    }

    // Calculate link using API URL
    const uiLinkRegexp = new RegExp('(?<=ovirt-engine)\\/api(\\/)*$', 'g');
    const regexpResult = uiLinkRegexp.exec(provider?.spec?.url);

    return provider?.spec?.url && regexpResult
      ? provider?.spec?.url.slice(0, uiLinkRegexp.lastIndex - regexpResult[0].length)
      : '';
  };

  return (
    <DescriptionList
      columnModifier={{
        default: '2Col',
      }}
    >
      <TypeDetailsItem resource={provider} />

      <ExternalManagementLinkDetailsItem
        resource={provider}
        canPatch={permissions.canPatch}
        webUILinkText={t(`Red Hat Virtualization Manager UI`)}
        webUILink={getProviderUiContent(provider)}
      />

      <NameDetailsItem resource={provider} />

      <NamespaceDetailsItem resource={provider} />

      <URLDetailsItem
        resource={provider}
        canPatch={permissions.canPatch}
        helpContent={t(
          `URL of the API endpoint of the Red Hat Virtualization Manager (RHVM) on which the source VM is mounted. Ensure that the URL includes the path leading to the RHVM API server, usually /ovirt-engine/api. For example, https://rhv-host-example.com/ovirt-engine/api.`,
        )}
      />

      <CredentialsDetailsItem resource={provider} />

      <CreatedAtDetailsItem resource={provider} />

      <DetailsItem title={''} content={''} />

      <OwnerDetailsItem resource={provider} />
    </DescriptionList>
  );
};
