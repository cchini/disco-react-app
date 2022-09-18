import { CreativeMatrix } from '../models/creativeMatrix.model';

export const allCreativeMatrixAdapter = (data: any): CreativeMatrix[] => {
  const matrixList = data?.creativeMatrixList;
  const response = matrixList?.map(value => {
    const matrix: CreativeMatrix = {
      id: value?.id,
      name: value?.name,
      statusId: value?.statusId,
      status: value?.status,
      accountId: value?.accountId,
      deleted: value?.deleted,
      created: value?.created,
      modified: value?.modified,
    };
    return matrix;
  });
  return response;
};
