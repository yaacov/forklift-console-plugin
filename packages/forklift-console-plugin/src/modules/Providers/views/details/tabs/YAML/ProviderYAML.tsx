import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ProviderData } from 'src/modules/Providers/utils';
import { useForkliftTranslation } from 'src/utils/i18n';

import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';

interface ProviderYAMLPageProps extends RouteComponentProps {
  obj: ProviderData;
  ns?: string;
  name?: string;
  loaded?: boolean;
  loadError?: unknown;
}

export const ProviderYAMLPage: React.FC<ProviderYAMLPageProps> = ({ obj, loaded, loadError }) => {
  const { t } = useForkliftTranslation();
  const { provider } = obj;

  return (
    <React.Suspense
      fallback={
        <Bullseye>
          <Loading />
        </Bullseye>
      }
    >
      {provider && loaded && !loadError && (
        <ResourceYAMLEditor header={t('Provider YAML')} initialResource={provider} />
      )}
    </React.Suspense>
  );
};

const Loading: React.FC = () => (
  <div className="co-m-loader co-an-fade-in-out" data-test="loading-indicator">
    <div className="co-m-loader-dot__one" />
    <div className="co-m-loader-dot__two" />
    <div className="co-m-loader-dot__three" />
  </div>
);

export default ProviderYAMLPage;