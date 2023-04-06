#### React Native Sample apps for @rnmapbox/maps

## Configure

Create and `rnrnmapboxts/accesstoken.json` file, with your accesstoken in quotes:

```sh
code rnrnmapboxts/accesstoken.json
```

```json
"pk.<rest of your token>"
```



## Instructions to recreate the ReactNative project

```sh
npx react-native init rnrnmapboxts --version 0.71
# npx react-native init rnrnmapboxts --template react-native-template-typescript

cd rnrnmapboxts
yarn add @rnmapbox/maps

code ./ios/Podfile
```

```pod
$RNMapboxMapsImpl = 'mapbox'
...
  pre_install do |installer|
    $RNMapboxMaps.pre_install(installer)
  end

  post_install do |installer|
    $RNMapboxMaps.post_install(installer)

```

android/build.gradle
```gradle
buildscript {
    ext {
        ...
        RNMapboxMapsImpl = "mapbox"
        ...
    }
}
...
allprojects {
    repositories {
      maven {
            url 'https://api.mapbox.com/downloads/v2/releases/maven'
            authentication {
                basic(BasicAuthentication)
            }
            credentials {
                // Do not change the username below.
                // This should always be `mapbox` (not your username).
                username = 'mapbox'
                // Use the secret token you stored in gradle.properties as the password
                password = project.properties['MAPBOX_DOWNLOADS_TOKEN'] ?: ""
            }
      }
    }
}
```

android/app/build.gradle
```gradle
android {
    ...
    packagingOptions {
        pickFirst 'lib/x86/libc++_shared.so'
        pickFirst 'lib/x86_64/libc++_shared.so'
        pickFirst 'lib/arm64-v8a/libc++_shared.so'
        pickFirst 'lib/armeabi-v7a/libc++_shared.so'
    }
}
```

```
npx tsc --noEmit
```

## Expo

```sh
npx create-expo-app -t expo-template-blank-typescript
npx expo install @rnmapbox/maps
npx eas build --platform ios --local

expo init expo-rnmapbox
cd expo-rnmapbox
expo install rnmapbox/maps#main

#expo install  file://Users/boga/Work/OSS/RNMBGL/maps
#cp -rf /Users/boga/Work/OSS/RNMBGL/maps/plugin/build/withMapbox.* ./node_modules/@rnmapbox/maps/plugin/build/
#cp -rf /Users/boga/Work/OSS/RNMBGL/maps/android ./node_modules/@rnmapbox/maps/
expo prebuild
#edit app.json expo/plugins
# [ "@rnmapbox/maps",
#   {
#     "RNMapboxMapsImpl" : "mapbox-gl"
#   }
# ]
eas build --platform ios --local
expo run:ios
rm -rf ios ; EXPO_DEBUG=1 expo run:ios
```

Issues:

https://github.com/expo/expo-cli/blob/main/packages/config-plugins/src/utils/generateCode.ts

npx jest ./plugin/src/__tests__/withMapbox-test.ts -t 'blocks after comments'


EXPO_DEBUG=1 expo run:android



