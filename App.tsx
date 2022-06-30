import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-get-random-values';

import type { InitConfig } from '@aries-framework/core';
import { Agent } from '@aries-framework/core';
import { WsOutboundTransport, HttpOutboundTransport } from '@aries-framework/core';

import { agentDependencies } from '@aries-framework/react-native';
const config: InitConfig = {
  label: 'docs-rn-agent',
  walletConfig: {
    id: 'wallet-id',
    key: 'testkey0000000000000000000000000',
  },
}

export default function App() {
  // const agent = new Agent(config, agentDependencies);
  // agent.registerOutboundTransport(new WsOutboundTransport());
  // agent.registerOutboundTransport(new HttpOutboundTransport());
  // const initialize = async () => await agent.initialize().catch(console.error);
  return (
    <View style={styles.container}>
      <Text>SSI DEMO! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
