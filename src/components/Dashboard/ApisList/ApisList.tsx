import {Suspense, useMemo, useState} from 'react';

import {Select, Skeleton, Tag, Tooltip} from 'antd';

import {TOOLTIP_DELAY} from '@constants/constants';
import {EnvoyFleetInfoTooltip} from '@constants/tooltips';

import {EnvoyFleetItem, useGetApis, useGetEnvoyFleets} from '@models/api';

import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {selectApi} from '@redux/reducers/main';
import {toggleEnvoyFleetInfoModal} from '@redux/reducers/ui';

import {EnvoyFleetInfoModal} from '@components';

import ApisListTable from './ApisListTable';

import * as S from './styled';

const {Option} = Select;

const ApisList: React.FC = () => {
  const dispatch = useAppDispatch();
  const envoyFleet = useAppSelector(state => state.ui.envoyFleetModal.envoyFleet);

  const [selectedFleet, setSelectedFleet] = useState<EnvoyFleetItem>();
  const [selectedNamespace, setSelectedNamespace] = useState<string>();

  const {data, error, loading} = useGetApis({
    queryParams: {
      fleetname: selectedFleet?.name,
      fleetnamespace: selectedFleet?.namespace,
      namespace: selectedNamespace,
    },
  });
  const envoyFleetsState = useGetEnvoyFleets({});

  const apisNamespaces = useMemo((): string[] => {
    if (!data) {
      return [];
    }

    const namespaces = data.map(apiItem => apiItem.namespace);

    return [...Array.from(new Set(namespaces))];
  }, [data]);

  const onEnvoyFleetSelectHandler = (envoyFleetItem: EnvoyFleetItem) => {
    setSelectedFleet(envoyFleetItem);
    dispatch(selectApi(null));
  };

  const onNamespaceSelectHandler = (namespace: string) => {
    setSelectedNamespace(namespace);
    dispatch(selectApi(null));
  };

  const onEnvoyFleetInfoIconClickHandler = () => {
    if (!selectedFleet) {
      return;
    }

    dispatch(toggleEnvoyFleetInfoModal({name: selectedFleet.name, namespace: selectedFleet.namespace}));
  };

  const onEnvoyFleetSelectionClearHandler = () => {
    setSelectedFleet(undefined);
    dispatch(selectApi(null));
  };

  const onNamespaceSelectionClearHandler = () => {
    setSelectedNamespace(undefined);
    dispatch(selectApi(null));
  };

  return (
    <>
      <S.ApisListContainer>
        <S.TitleContainer>
          <S.TitleLabel>APIs</S.TitleLabel>

          <S.TitleFiltersContainer>
            <S.EnvoyFleetFilterContainer>
              {envoyFleetsState.loading ? (
                <Skeleton.Button />
              ) : envoyFleetsState.error ? (
                <S.ErrorLabel>{envoyFleetsState.error.message}</S.ErrorLabel>
              ) : (
                envoyFleetsState.data && (
                  <S.Select
                    allowClear
                    placeholder="Select a fleet"
                    showSearch
                    onClear={onEnvoyFleetSelectionClearHandler}
                    onSelect={(value: any, option: any) => {
                      onEnvoyFleetSelectHandler(option.envoyfleet);
                    }}
                  >
                    {envoyFleetsState.data.map(envoyFleetItem => (
                      <Option
                        key={`${envoyFleetItem.namespace}-${envoyFleetItem.name}`}
                        value={envoyFleetItem.name}
                        envoyfleet={envoyFleetItem}
                      >
                        <Tag>{envoyFleetItem.namespace}</Tag>
                        {envoyFleetItem.name}
                      </Option>
                    ))}
                  </S.Select>
                )
              )}

              {selectedFleet && (
                <Tooltip mouseEnterDelay={TOOLTIP_DELAY} title={EnvoyFleetInfoTooltip}>
                  <S.QuestionCircleOutlined onClick={onEnvoyFleetInfoIconClickHandler} />
                </Tooltip>
              )}
            </S.EnvoyFleetFilterContainer>

            {loading ? (
              <Skeleton.Button />
            ) : error ? null : (
              <S.Select
                allowClear
                placeholder="Select a namespace"
                value={selectedNamespace}
                showSearch
                onClear={onNamespaceSelectionClearHandler}
                onSelect={(value: any) => {
                  onNamespaceSelectHandler(value);
                }}
              >
                {apisNamespaces.map(namespace => (
                  <Option key={namespace} value={namespace}>
                    {namespace}
                  </Option>
                ))}
              </S.Select>
            )}
          </S.TitleFiltersContainer>
        </S.TitleContainer>

        {loading ? (
          <Skeleton />
        ) : error ? (
          <S.ErrorLabel>{error.message}</S.ErrorLabel>
        ) : (
          data && <ApisListTable apis={data} />
        )}
      </S.ApisListContainer>

      <Suspense fallback={null}>{envoyFleet && <EnvoyFleetInfoModal />}</Suspense>
    </>
  );
};

export default ApisList;
