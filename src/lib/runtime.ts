import { ConfigProvider, Layer, ManagedRuntime } from 'effect'

const LiveLayers = Layer.setConfigProvider(ConfigProvider.fromEnv())

export const BackendRuntime = ManagedRuntime.make(LiveLayers)
