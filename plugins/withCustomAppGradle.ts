import { ExpoConfig } from '@expo/config-types'
import { withAppBuildGradle, withGradleProperties } from 'expo/config-plugins'

export const withCustomAppGradle = (config: ExpoConfig) => {
  return withAppBuildGradle(config, (mds) => {
    mds.modResults.contents = mds.modResults.contents.replace(
      // eslint-disable-next-line no-template-curly-in-string
      'debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}")',
      '',
    )
    return mds
  })
}
export const withDebugKeystore = (config: ExpoConfig) => {
  return withAppBuildGradle(config, (mds) => {
    mds.modResults.contents = mds.modResults.contents.replace(
      `storeFile file('debug.keystore')`,
      `storeFile file('../../certs/android/debug.keystore')`,
    )
    return mds
  })
}

export const withDisableJVMs = (config: ExpoConfig) => {
  return withGradleProperties(config, (mds) => {
    ;(
      mds.modResults.find(
        (val) => val.type === 'property' && val.key === 'org.gradle.jvmargs',
      ) as any
    ).value = '-Xmx4096m'
    return mds
  })
}
