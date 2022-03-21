import {Skeleton} from 'antd';

import SwaggerUI from 'swagger-ui-react';
import YAML from 'yaml';

import {useGetPostProcessedOpenApiSpec} from '@models/api';

import {useAppSelector} from '@redux/hooks';

import {DynamicServersPlugin, TableOfContentsPlugin} from '@swaggerUI/plugins';

import * as S from './styled';

const PostProcessedApiSpec: React.FC = () => {
  const selectedApi = useAppSelector(state => state.main.selectedApi);

  const {data, error, loading} = useGetPostProcessedOpenApiSpec({
    name: selectedApi?.name || '',
    namespace: selectedApi?.namespace || '',
  });

  return (
    <S.PostProcessedApiSpecContainer>
      {loading ? (
        <Skeleton />
      ) : error ? (
        <S.ErrorLabel>{error.message}</S.ErrorLabel>
      ) : (
        data && <SwaggerUI spec={YAML.parse(data)} plugins={[TableOfContentsPlugin, DynamicServersPlugin]} />
      )}
    </S.PostProcessedApiSpecContainer>
  );
};

export default PostProcessedApiSpec;
