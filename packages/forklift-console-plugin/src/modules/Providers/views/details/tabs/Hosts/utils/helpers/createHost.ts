import { HostModel, V1beta1Host } from '@kubev2v/types';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';

/**
 * Creates a new host in the Kubernetes cluster.
 *
 * @param {V1beta1Host} newHostData - The data for the new host to be created.
 * @returns {Promise<V1beta1Host>} A promise that resolves to the created host.
 */
export async function createHost(newHostData: V1beta1Host) {
  const createdHost = await k8sCreate({
    model: HostModel,
    data: newHostData,
  });

  return createdHost;
}
