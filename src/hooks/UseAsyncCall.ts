import { useEffect, useState } from 'react';

interface AsyncApiCallNotStarted {
  started: false;
  loading: false;
  failed: false;
  completed: false;
}
interface AsyncApiCallInProgress {
  started: true;
  loading: true;
  failed: false;
  completed: false;
}

interface AsyncApiCallSuccess<TRes> {
  started: true;
  loading: false;
  failed: false;
  completed: true;
  result: TRes;
}

interface AsyncApiCallError {
  started: true;
  loading: false;
  completed: false;
  failed: true;
  error: unknown;
}

type AsyncApiCallStatus<TRes> =
  | AsyncApiCallNotStarted
  | AsyncApiCallInProgress
  | AsyncApiCallSuccess<TRes>
  | AsyncApiCallError;

export function useAsyncCall<TRes>(
  asyncMethod: () => Promise<TRes>,
  dependencies: any[]
): AsyncApiCallStatus<TRes> {
  const [apiCallStatus, setApiCallStatus] = useState<AsyncApiCallStatus<TRes>>({
    started: false,
    loading: false,
    failed: false,
    completed: false,
  });

  useEffect(() => {
    let canceled = false;

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async (): Promise<void> => {
      try {
        setApiCallStatus({
          started: true,
          loading: true,
          failed: false,
          completed: false,
        });
        const result = await asyncMethod();
        if (!canceled) {
          setApiCallStatus({
            started: true,
            loading: false,
            failed: false,
            completed: true,
            result,
          });
        }
      } catch (error) {
        if (!canceled) {
          setApiCallStatus({
            started: true,
            loading: false,
            failed: true,
            completed: false,
            error,
          });
        }
      }
    })();

    return (): void => {
      canceled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return apiCallStatus;
}
