import 'react-native-get-random-values';
import {
  DynamicConfig,
  Layer, StatsigContext,
  useConfig,
  useConfigWithExposureLoggingDisabled,
  useExperiment,
  useExperimentWithExposureLoggingDisabled,
  useGate,
  useGateWithExposureLoggingDisabled,
  useLayer,
  useLayerWithExposureLoggingDisabled,
  useStatsigLogEffect,
} from 'statsig-react';
import Statsig from './Statsig';
import StatsigProvider from './StatsigProvider';

export type {
  ConfigResult,
  GateResult,
  LayerResult, StatsigEnvironment, StatsigOptions, StatsigOverrides, StatsigUser
} from 'statsig-react';
export {
  Statsig,
  StatsigContext,
  StatsigProvider,
  useConfig,
  useConfigWithExposureLoggingDisabled,
  useExperiment,
  useExperimentWithExposureLoggingDisabled,
  useGate,
  useGateWithExposureLoggingDisabled,
  useLayer,
  useLayerWithExposureLoggingDisabled,
  useStatsigLogEffect,
  DynamicConfig,
  Layer
};


