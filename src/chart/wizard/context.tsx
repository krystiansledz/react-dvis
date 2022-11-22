import { ChartSteps } from './schemas';
import { createContext } from '../../utils/react';
import React, { useState } from 'react';
import { getChartStepsInitialValues } from '../utils';
import { matchPath, useLocation, useNavigate } from 'react-router';
import { ChartRouterSteps, getChartStepRoute } from './router';
import { ChartStepDetail } from './types';
import { WizardContext } from '../../components/wizard/types';
import { Config, Data } from '../types';
import { Routes } from '../routes';

export type ChartStepsPartial = Partial<ChartSteps>;

export type ChartContext = WizardContext<ChartStepsPartial>;

const [useChartWizardContext, Provider] = createContext<ChartContext>();

export { useChartWizardContext };

type Props = React.PropsWithChildren & {
  data: Data;
  config: Config;
};

const ChartProvider: React.FC<Props> = ({ children, data, config }) => {
  const [error, setError] = useState<string>();

  // state/reducer

  const reducer = (state: ChartStepsPartial, payload: ChartStepsPartial) => {
    return {
      ...state,
      ...payload,
    };
  };

  const [state, dispatch] = React.useReducer(reducer, getChartStepsInitialValues(data, config));

  // Routing

  const navigate = useNavigate();
  const location = useLocation();

  const routes = ChartRouterSteps.map((item) => getChartStepRoute(item.step));

  const [currentStepDetailIndex, setCurrentStepDetailIndex] = React.useState(0);
  const currentStepDetail: ChartStepDetail = ChartRouterSteps[currentStepDetailIndex];

  const isFirstStep = currentStepDetailIndex === 0;
  const isLastStep = currentStepDetailIndex === routes.length - 1;

  React.useEffect(() => {
    // redirect on onMount to 1st route of steps, allow user to change paths by Continue/Back buttons and Breadcrumbs
    navigate(routes[0], { replace: true });
  }, []);

  React.useEffect(() => {
    const path = location.pathname;

    // if user re-clicks on nav button to /add, redirect to first step
    if (path === Routes.ChartCreate()) {
      navigate(routes[0], { replace: true });
      return;
    }

    // when location.pathname changes via breadcrumb, set current index
    setCurrentStepDetailIndex(routes.findIndex((route) => matchPath(path, route)));

    if (currentStepDetail?.prepareStep) {
      currentStepDetail.prepareStep(state, save);
    }
  }, [location?.pathname]);

  const cancel = () => {
    setCurrentStepDetailIndex(0);
    navigate('/');
  };

  const back = () => {
    move(-1);
  };

  const save = (data: ChartStepsPartial) => {
    dispatch(data);
    setError(undefined);
  };

  const move = (oneOrMinusOne: 1 | -1) => {
    if (currentStepDetail.beforeNextStep) currentStepDetail.beforeNextStep(state, save);

    const nextRouteIndex = currentStepDetailIndex + oneOrMinusOne;

    if (nextRouteIndex >= routes.length || nextRouteIndex < 0) {
      navigate('/');
      return;
    }

    setCurrentStepDetailIndex(nextRouteIndex);
    navigate(routes[nextRouteIndex]);
  };

  const next = async () => {
    if (currentStepDetail.validation) {
      const validationResult = await currentStepDetail.validation(state).then((result) => result);

      // error
      if (validationResult) {
        setError(validationResult.message);
        return;
      }
    }

    move(1);
  };

  //

  return (
    <Provider
      value={{
        back,
        cancel,
        save,
        next,
        error,
        isFirstStep,
        isLastStep,
        currentStepDetailIndex,
        data: {
          ...state,
        },
      }}
    >
      {children}
    </Provider>
  );
};

export default ChartProvider;
