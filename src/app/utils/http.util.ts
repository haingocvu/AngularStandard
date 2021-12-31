import { IHttpResult } from '@app/interfaces/http.interface';
import { RESPONSE_STATUS } from '@app/consts/appConstants';

export function parseResponse<T>(
  response: IHttpResult<T>,
  successCallback?: (data: T) => void,
  failCallback?: (err: any) => void
) {
  switch (response.status) {
    case RESPONSE_STATUS.SUCCESS:
      successCallback?.(response.data);
      return response.data;
    default:
      return null;
  }
}
