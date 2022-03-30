/* Generated by restful-react */
import {Get, GetProps, UseGetProps, useGet} from 'restful-react';

export const SPEC_VERSION = '1.0.0';
export interface ApiItem {
  name: string;
  namespace: string;
  fleet: ApiItemFleet;
  service: ApiItemService;
  version: string;
}

export interface ServiceItem {
  name: string;
  status: 'available' | 'unavailable';
  namespace: string;
}

export interface EnvoyFleetItem {
  name: string;
  namespace: string;
  apis?: ApiItemFleet[];
  services?: ServiceItem[];
  staticRoutes?: StaticRouteItemFleet[];
}

export interface ApiItemFleet {
  name: string;
  namespace: string;
}

export interface StaticRouteItemFleet {
  name: string;
  namespace: string;
}

export interface ApiItemService {
  name: string;
  namespace: string;
}

export interface GetApisQueryParams {
  /**
   * optional filter on fleet
   */
  fleetname?: string;
  /**
   * optional filter on fleet
   */
  fleetnamespace?: string;
  /**
   * optional filter on namespace
   */
  namespace?: string;
}

export type GetApisProps = Omit<GetProps<ApiItem[], unknown, GetApisQueryParams, void>, 'path'>;

/**
 * Get a list of APIs
 *
 * Returns the list of APIs available in the cluster
 */
export const GetApis = (props: GetApisProps) => (
  <Get<ApiItem[], unknown, GetApisQueryParams, void> path="/apis" {...props} />
);

export type UseGetApisProps = Omit<UseGetProps<ApiItem[], unknown, GetApisQueryParams, void>, 'path'>;

/**
 * Get a list of APIs
 *
 * Returns the list of APIs available in the cluster
 */
export const useGetApis = (props: UseGetApisProps) =>
  useGet<ApiItem[], unknown, GetApisQueryParams, void>(`/apis`, props);

export interface GetApiPathParams {
  namespace: string;
  name: string;
}

export type GetApiProps = Omit<GetProps<ApiItem, void, void, GetApiPathParams>, 'path'> & GetApiPathParams;

/**
 * Get an API instance by namespace and name
 */
export const GetApi = ({namespace, name, ...props}: GetApiProps) => (
  <Get<ApiItem, void, void, GetApiPathParams> path={`/apis/${namespace}/${name}"`} {...props} />
);

export type UseGetApiProps = Omit<UseGetProps<ApiItem, void, void, GetApiPathParams>, 'path'> & GetApiPathParams;

/**
 * Get an API instance by namespace and name
 */
export const useGetApi = ({namespace, name, ...props}: UseGetApiProps) =>
  useGet<ApiItem, void, void, GetApiPathParams>(
    (paramsInPath: GetApiPathParams) => `/apis/${paramsInPath.namespace}/${paramsInPath.name}"`,
    {pathParams: {namespace, name}, ...props}
  );

export interface GetRawOpenApiSpecPathParams {
  namespace: string;
  name: string;
}

export type GetRawOpenApiSpecProps = Omit<GetProps<string, void, void, GetRawOpenApiSpecPathParams>, 'path'> &
  GetRawOpenApiSpecPathParams;

/**
 * Get the raw OpenAPI spec by API id
 *
 * Returns the raw OpenAPI specification
 */
export const GetRawOpenApiSpec = ({namespace, name, ...props}: GetRawOpenApiSpecProps) => (
  <Get<string, void, void, GetRawOpenApiSpecPathParams> path={`/apis/${namespace}/${name}/rawOpenApiSpec`} {...props} />
);

export type UseGetRawOpenApiSpecProps = Omit<UseGetProps<string, void, void, GetRawOpenApiSpecPathParams>, 'path'> &
  GetRawOpenApiSpecPathParams;

/**
 * Get the raw OpenAPI spec by API id
 *
 * Returns the raw OpenAPI specification
 */
export const useGetRawOpenApiSpec = ({namespace, name, ...props}: UseGetRawOpenApiSpecProps) =>
  useGet<string, void, void, GetRawOpenApiSpecPathParams>(
    (paramsInPath: GetRawOpenApiSpecPathParams) =>
      `/apis/${paramsInPath.namespace}/${paramsInPath.name}/rawOpenApiSpec`,
    {pathParams: {namespace, name}, ...props}
  );

export interface GetPostProcessedOpenApiSpecPathParams {
  namespace: string;
  name: string;
}

export type GetPostProcessedOpenApiSpecProps = Omit<
  GetProps<string, void, void, GetPostProcessedOpenApiSpecPathParams>,
  'path'
> &
  GetPostProcessedOpenApiSpecPathParams;

/**
 * Get the post-processed OpenAPI spec by API id
 *
 * Returns the post-processed OpenAPI specification
 */
export const GetPostProcessedOpenApiSpec = ({namespace, name, ...props}: GetPostProcessedOpenApiSpecProps) => (
  <Get<string, void, void, GetPostProcessedOpenApiSpecPathParams>
    path={`/apis/${namespace}/${name}/postProcessedOpenApiSpec`}
    {...props}
  />
);

export type UseGetPostProcessedOpenApiSpecProps = Omit<
  UseGetProps<string, void, void, GetPostProcessedOpenApiSpecPathParams>,
  'path'
> &
  GetPostProcessedOpenApiSpecPathParams;

/**
 * Get the post-processed OpenAPI spec by API id
 *
 * Returns the post-processed OpenAPI specification
 */
export const useGetPostProcessedOpenApiSpec = ({namespace, name, ...props}: UseGetPostProcessedOpenApiSpecProps) =>
  useGet<string, void, void, GetPostProcessedOpenApiSpecPathParams>(
    (paramsInPath: GetPostProcessedOpenApiSpecPathParams) =>
      `/apis/${paramsInPath.namespace}/${paramsInPath.name}/postProcessedOpenApiSpec`,
    {pathParams: {namespace, name}, ...props}
  );

export interface GetServicesQueryParams {
  /**
   * optional filter on namespace
   */
  namespace?: string;
}

export type GetServicesProps = Omit<GetProps<ServiceItem[], unknown, GetServicesQueryParams, void>, 'path'>;

/**
 * Get a list of services handled by kusk-gateway
 *
 * Returns the list of services available in the cluster that are related to kusk-gateway
 */
export const GetServices = (props: GetServicesProps) => (
  <Get<ServiceItem[], unknown, GetServicesQueryParams, void> path="/services" {...props} />
);

export type UseGetServicesProps = Omit<UseGetProps<ServiceItem[], unknown, GetServicesQueryParams, void>, 'path'>;

/**
 * Get a list of services handled by kusk-gateway
 *
 * Returns the list of services available in the cluster that are related to kusk-gateway
 */
export const useGetServices = (props: UseGetServicesProps) =>
  useGet<ServiceItem[], unknown, GetServicesQueryParams, void>(`/services`, props);

export interface GetServicePathParams {
  namespace: string;
  name: string;
}

export type GetServiceProps = Omit<GetProps<ServiceItem, void, void, GetServicePathParams>, 'path'> &
  GetServicePathParams;

/**
 * Get details for a single service
 *
 * Returns an object containing info about the service corresponding to the namespace and name
 */
export const GetService = ({namespace, name, ...props}: GetServiceProps) => (
  <Get<ServiceItem, void, void, GetServicePathParams> path={`/services/${namespace}/${name}`} {...props} />
);

export type UseGetServiceProps = Omit<UseGetProps<ServiceItem, void, void, GetServicePathParams>, 'path'> &
  GetServicePathParams;

/**
 * Get details for a single service
 *
 * Returns an object containing info about the service corresponding to the namespace and name
 */
export const useGetService = ({namespace, name, ...props}: UseGetServiceProps) =>
  useGet<ServiceItem, void, void, GetServicePathParams>(
    (paramsInPath: GetServicePathParams) => `/services/${paramsInPath.namespace}/${paramsInPath.name}`,
    {pathParams: {namespace, name}, ...props}
  );

export interface GetEnvoyFleetsQueryParams {
  /**
   * optional filter on namespace
   */
  namespace?: string;
}

export type GetEnvoyFleetsProps = Omit<GetProps<EnvoyFleetItem[], unknown, GetEnvoyFleetsQueryParams, void>, 'path'>;

/**
 * Get a list of envoy fleets
 *
 * Returns a list of envoy fleets that are available in the cluster
 */
export const GetEnvoyFleets = (props: GetEnvoyFleetsProps) => (
  <Get<EnvoyFleetItem[], unknown, GetEnvoyFleetsQueryParams, void> path="/fleets" {...props} />
);

export type UseGetEnvoyFleetsProps = Omit<
  UseGetProps<EnvoyFleetItem[], unknown, GetEnvoyFleetsQueryParams, void>,
  'path'
>;

/**
 * Get a list of envoy fleets
 *
 * Returns a list of envoy fleets that are available in the cluster
 */
export const useGetEnvoyFleets = (props: UseGetEnvoyFleetsProps) =>
  useGet<EnvoyFleetItem[], unknown, GetEnvoyFleetsQueryParams, void>(`/fleets`, props);

export interface GetEnvoyFleetQueryParams {
  /**
   * returns the fleet CRD
   */
  crd?: boolean;
}

export interface GetEnvoyFleetPathParams {
  /**
   * the namespace of the fleet
   */
  namespace: string;
  /**
   * the name of the fleet
   */
  name: string;
}

export type GetEnvoyFleetProps = Omit<
  GetProps<EnvoyFleetItem, void, GetEnvoyFleetQueryParams, GetEnvoyFleetPathParams>,
  'path'
> &
  GetEnvoyFleetPathParams;

/**
 * Get details for a single envoy fleet
 *
 * Returns an object containing info about the envoy fleet corresponding to the namespace and name
 */
export const GetEnvoyFleet = ({namespace, name, ...props}: GetEnvoyFleetProps) => (
  <Get<EnvoyFleetItem, void, GetEnvoyFleetQueryParams, GetEnvoyFleetPathParams>
    path={`/fleets/${namespace}/${name}`}
    {...props}
  />
);

export type UseGetEnvoyFleetProps = Omit<
  UseGetProps<EnvoyFleetItem, void, GetEnvoyFleetQueryParams, GetEnvoyFleetPathParams>,
  'path'
> &
  GetEnvoyFleetPathParams;

/**
 * Get details for a single envoy fleet
 *
 * Returns an object containing info about the envoy fleet corresponding to the namespace and name
 */
export const useGetEnvoyFleet = ({namespace, name, ...props}: UseGetEnvoyFleetProps) =>
  useGet<EnvoyFleetItem, void, GetEnvoyFleetQueryParams, GetEnvoyFleetPathParams>(
    (paramsInPath: GetEnvoyFleetPathParams) => `/fleets/${paramsInPath.namespace}/${paramsInPath.name}`,
    {pathParams: {namespace, name}, ...props}
  );
